// Select the necessary elements
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const feedback = document.querySelector("#feedback");

// Add focusout event listener to confirmPassword
confirmPassword.addEventListener("focusout", validatePasswords);

function validatePasswords() {
    // Check if the password and confirmPassword fields match
    if (password.value !== confirmPassword.value) {
        // If they don't match, show feedback and clear the fields
        password.value = "";
        confirmPassword.value = "";
        password.focus(); // Move focus back to the password field
        feedback.textContent = "Password do not match. Try again.";
        feedback.style.color = "red"; // Optional: Change feedback color to red
    } else {
        // If they match, clear the feedback
        feedback.textContent = "";
    }
}


