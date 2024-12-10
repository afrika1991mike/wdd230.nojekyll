// Get the current date and day of the week
const date = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = weekday[date.getDay()];

// Define the announcement message
const announcementMessage = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 PM';

// Check if today is Monday, Tuesday, or Wednesday
if (["Monday", "Tuesday", "Wednesday"].includes(dayOfWeek)) {
    // Create the banner
    const banner = document.createElement('div');
    banner.id = 'announcement-banner';
    banner.innerHTML = `
        <p>${announcementMessage}</p>
        <button id="close-banner">❌ Close</button>
    `;

    // Append the banner to the `#announcement` element
    const announcementElement = document.getElementById('announcement');
    announcementElement.appendChild(banner);

    // Add functionality to close the banner
    document.getElementById('close-banner').addEventListener('click', () => {
        banner.style.display = 'none';
    });
}

// Update the current date in the designated element
document.getElementById("current_date").innerText = `${dayOfWeek}, ${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;

// Update the copyright year
const currentYear = new Date().getFullYear();
document.querySelectorAll('[id^="copyright"]').forEach(el => el.textContent = `© ${currentYear}`);

// Update the last modified date
document.querySelectorAll('[id^="lastupdate"]').forEach(el => el.innerText = document.lastModified);

// Toggle menu function
function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle('open');
    document.getElementById('hamburger-button').classList.toggle('open');
}

// Attach the toggle menu function to the hamburger button
document.getElementById('hamburger-button').onclick = toggleMenu;
