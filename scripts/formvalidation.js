const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const feedback = document.querySelector("#feedback");
const form = document.querySelector("#user-form");

// Add event listener to the form submission
form.addEventListener("submit", function(event) {
    // Call validatePasswords when the form is submitted
    if (!validatePasswords()) {
        event.preventDefault(); // Prevent form submission if passwords don't match
    }
});

// Function to validate the passwords
function validatePasswords() {
    // Check if the password and confirmPassword fields match
    if (password.value !== confirmPassword.value) {
        // If they don't match, show feedback and clear the fields
        password.value = "";
        confirmPassword.value = "";
        password.focus(); // Move focus back to the password field
        feedback.textContent = "Password do not match. Try again.";
        feedback.style.color = "red"; // Change feedback color to red
        return false; // Return false to prevent form submission
    } else {
        // If they match, clear the feedback
        feedback.textContent = "";
        return true; // Return true to allow form submission
    }
}

