
const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const studentId = document.getElementById("studentId").value;
    const email = document.getElementById("email").value;
    const department = document.getElementById("department").value;

    const row = document.createElement("tr");

    [name, studentId, email, department].forEach(function(value) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        row.remove();
    });

    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
    studentList.appendChild(row);

    message.textContent = "Student added successfully!";
    form.reset();
});

form.addEventListener("reset", function() {
    message.textContent = "";
});

document.getElementById("loadStudents").addEventListener("click", function() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const student = JSON.parse(xhr.responseText);

            document.getElementById("ajaxMessage").textContent =
                "Name: " + student.name +
                " | Email: " + student.email;
        } else {
            document.getElementById("ajaxMessage").textContent =
                "Failed to load student data.";
        }
    };

    xhr.onerror = function() {
        document.getElementById("ajaxMessage").textContent =
            "Network error. Please check your internet connection.";
    };

    xhr.send();
});
