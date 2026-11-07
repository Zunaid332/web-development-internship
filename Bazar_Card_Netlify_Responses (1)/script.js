const form = document.getElementById("surveyForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function(event) {
  event.preventDefault();

  const eligibility = form.querySelector('input[name="eligible"]:checked');
  if (!eligibility || eligibility.value !== "Yes") {
    message.textContent = "This survey is for working people who buy their own groceries. Please check the eligibility answer.";
    message.style.color = "#b00020";
    return;
  }

  message.style.color = "#555";
  message.textContent = "Submitting your answers...";

  const formData = new FormData(form);
  const encodedData = new URLSearchParams(formData).toString();

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encodedData
    });

    if (!response.ok) {
      throw new Error("The server could not save this response.");
    }

    message.style.color = "#176b3a";
    message.textContent = "Thank you! Your response has been submitted.";
    form.reset();
  } catch (error) {
    message.style.color = "#b00020";
    message.textContent = "Sorry, the response could not be submitted. Please try again or contact the researcher.";
  }
});
