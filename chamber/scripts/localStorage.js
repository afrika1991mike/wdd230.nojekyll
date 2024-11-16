
// 1️⃣ Initialize the display element for the visit message
const visitMessage = document.getElementById("visitMessage");

// 2️⃣ Get the current time and retrieve the last visit timestamp from localStorage
const now = new Date();
let lastVisit = window.localStorage.getItem("lastVisit-ls");

// 3️⃣ Check if the user has a stored last visit
let message;
if (!lastVisit) {
    // No stored timestamp (first visit)
    message = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate the time difference
    const lastVisitDate = new Date(lastVisit); // Convert stored string to Date object
    const timeDifference = now - lastVisitDate; // Difference in milliseconds
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to whole days

    if (timeDifference < 24 * 60 * 60 * 1000) {
        // Less than 1 day
        message = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        // Exactly 1 day
        message = "You last visited 1 day ago.";
    } else {
        // More than 1 day
        message = `You last visited ${daysDifference} days ago.`;
    }
}

// 4️⃣ Display the message in the sidebar
visitMessage.textContent = message;

// 5️⃣ Store the current visit timestamp in localStorage
localStorage.setItem("lastVisit-ls", now.toISOString());
