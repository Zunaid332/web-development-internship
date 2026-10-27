const defaultIssues = [
  {
    id: 1,
    title: "Login button not working on mobile",
    description: "When I tap the login button on my phone, nothing happens. It works fine on desktop.",
    status: "open",
    author: "rahim",
    priority: "high",
    labels: ["bug", "mobile"],
    createdAt: "2026-10-01"
  },
  {
    id: 2,
    title: "Add dark mode",
    description: "It would be nice to have a dark mode option for people who work at night.",
    status: "open",
    author: "nusrat",
    priority: "low",
    labels: ["enhancement", "ui"],
    createdAt: "2026-10-03"
  },
  {
    id: 3,
    title: "Search is case sensitive",
    description: "Searching for 'Bug' does not show issues that have 'bug' in the title.",
    status: "closed",
    author: "tanvir",
    priority: "medium",
    labels: ["bug"],
    createdAt: "2026-10-05"
  },
  {
    id: 4,
    title: "Page loads slowly",
    description: "The home page takes more than 5 seconds to load on a slow connection.",
    status: "open",
    author: "sadia",
    priority: "high",
    labels: ["performance"],
    createdAt: "2026-10-08"
  },
  {
    id: 5,
    title: "Typo in footer text",
    description: "The footer says 'Copyrigth' instead of 'Copyright'.",
    status: "closed",
    author: "arif",
    priority: "low",
    labels: ["documentation"],
    createdAt: "2026-10-10"
  },
  {
    id: 6,
    title: "Profile picture upload fails",
    description: "Uploading a PNG larger than 2MB shows an error and the image is not saved.",
    status: "open",
    author: "mitu",
    priority: "medium",
    labels: ["bug", "upload"],
    createdAt: "2026-10-12"
  }
];

let issues = JSON.parse(localStorage.getItem("issues")) || defaultIssues;
let currentTab = "all";
let searchText = "";

const loginPage = document.getElementById("login-page");
const appPage = document.getElementById("app-page");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const logoutBtn = document.getElementById("logout-btn");
const searchInput = document.getElementById("search-input");
const issueList = document.getElementById("issue-list");
const resultText = document.getElementById("result-text");
const tabs = document.querySelectorAll(".tab");
const detailsModal = document.getElementById("details-modal");
const detailsContent = document.getElementById("details-content");
const createModal = document.getElementById("create-modal");
const createForm = document.getElementById("create-form");
const newIssueBtn = document.getElementById("new-issue-btn");

function saveIssues() {
  localStorage.setItem("issues", JSON.stringify(issues));
}

function showApp() {
  loginPage.classList.add("hidden");
  appPage.classList.remove("hidden");
  renderIssues();
}

function showLogin() {
  appPage.classList.add("hidden");
  loginPage.classList.remove("hidden");
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "admin123") {
    localStorage.setItem("loggedIn", "true");
    loginError.textContent = "";
    loginForm.reset();
    showApp();
  } else {
    loginError.textContent = "Wrong username or password";
  }
});

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("loggedIn");
  showLogin();
});

function getFilteredIssues() {
  return issues.filter(function (issue) {
    const matchTab = currentTab === "all" || issue.status === currentTab;
    const matchSearch =
      issue.title.toLowerCase().includes(searchText) ||
      issue.description.toLowerCase().includes(searchText);
    return matchTab && matchSearch;
  });
}

function updateCounts() {
  const openIssues = issues.filter(issue => issue.status === "open");
  const closedIssues = issues.filter(issue => issue.status === "closed");
  document.getElementById("all-count").textContent = issues.length;
  document.getElementById("open-count").textContent = openIssues.length;
  document.getElementById("closed-count").textContent = closedIssues.length;
}

function renderIssues() {
  const filtered = getFilteredIssues();
  updateCounts();
  resultText.textContent = `Showing ${filtered.length} issue(s)`;

  if (filtered.length === 0) {
    issueList.innerHTML = `<p class="empty">No issues found.</p>`;
    return;
  }

  issueList.innerHTML = "";

  filtered.forEach(function (issue) {
    const card = document.createElement("div");
    card.className = `issue-card ${issue.status}`;

    const labelsHtml = issue.labels
      .map(label => `<span class="label">${label}</span>`)
      .join("");

    card.innerHTML = `
      <div class="card-top">
        <span class="status ${issue.status}">${issue.status}</span>
        <span class="priority ${issue.priority}">${issue.priority}</span>
      </div>
      <h3>${issue.title}</h3>
      <p>${issue.description.slice(0, 80)}${issue.description.length > 80 ? "..." : ""}</p>
      <div class="labels">${labelsHtml}</div>
      <div class="card-bottom">
        <span>#${issue.id} by ${issue.author}</span>
        <span>${issue.createdAt}</span>
      </div>
    `;

    card.addEventListener("click", function () {
      openDetails(issue.id);
    });

    issueList.appendChild(card);
  });
}

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentTab = tab.dataset.tab;
    renderIssues();
  });
});

searchInput.addEventListener("input", function () {
  searchText = searchInput.value.trim().toLowerCase();
  renderIssues();
});

function openDetails(id) {
  const issue = issues.find(item => item.id === id);

  const labelsHtml = issue.labels
    .map(label => `<span class="label">${label}</span>`)
    .join("");

  const buttonText = issue.status === "open" ? "Close Issue" : "Reopen Issue";
  const buttonClass = issue.status === "open" ? "btn-purple" : "btn-green";

  detailsContent.innerHTML = `
    <span class="status ${issue.status}">${issue.status}</span>
    <h2 class="details-title">${issue.title}</h2>
    <p class="details-text">${issue.description}</p>
    <div class="labels">${labelsHtml}</div>
    <p class="details-info"><strong>Issue No:</strong> #${issue.id}</p>
    <p class="details-info"><strong>Author:</strong> ${issue.author}</p>
    <p class="details-info"><strong>Priority:</strong> ${issue.priority}</p>
    <p class="details-info"><strong>Created:</strong> ${issue.createdAt}</p>
    <div class="details-actions">
      <button id="toggle-status-btn" class="btn ${buttonClass}">${buttonText}</button>
    </div>
  `;

  document.getElementById("toggle-status-btn").addEventListener("click", function () {
    issue.status = issue.status === "open" ? "closed" : "open";
    saveIssues();
    renderIssues();
    openDetails(id);
  });

  detailsModal.classList.remove("hidden");
}

newIssueBtn.addEventListener("click", function () {
  createModal.classList.remove("hidden");
});

createForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const labelsValue = document.getElementById("issue-labels").value;
  const labels = labelsValue
    .split(",")
    .map(label => label.trim())
    .filter(label => label !== "");

  const newIssue = {
    id: issues.length > 0 ? issues[issues.length - 1].id + 1 : 1,
    title: document.getElementById("issue-title").value.trim(),
    description: document.getElementById("issue-description").value.trim(),
    status: "open",
    author: document.getElementById("issue-author").value.trim(),
    priority: document.getElementById("issue-priority").value,
    labels: labels,
    createdAt: new Date().toISOString().slice(0, 10)
  };

  issues.push(newIssue);
  saveIssues();
  createForm.reset();
  createModal.classList.add("hidden");
  renderIssues();
});

document.querySelectorAll(".close-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.getElementById(btn.dataset.close).classList.add("hidden");
  });
});

document.querySelectorAll(".modal").forEach(function (modal) {
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});

if (localStorage.getItem("loggedIn") === "true") {
  showApp();
} else {
  showLogin();
}
