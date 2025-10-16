// Get elements from the DOM
const form = document.getElementById("userForm");
const result = document.getElementById("result");

// Listen for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload

  // Get input values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  // Create a JavaScript object
  const userData = {
    firstName: firstName,
    lastName: lastName
  };

  // Convert object to JSON string
  const jsonString = JSON.stringify(userData, null, 2);

  // Display it in the DOM
  result.textContent = jsonString;

  // Clear inputs
  form.reset();
});
