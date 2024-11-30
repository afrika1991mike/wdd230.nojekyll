const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const membersContainer = document.querySelector("#members");

// Fetch member data from JSON file
async function loadMembers() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error("Error fetching member data:", error);
  }
}

// Populate members dynamically
function displayMembers(members) {
  membersContainer.innerHTML = ""; // Clear existing content
  members.forEach(member => {
    const membership = member.membership || member.membershipLevel || "Not Specified";
    const memberSection = document.createElement("section");
    memberSection.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p>Membership: ${membership}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    membersContainer.appendChild(memberSection);
  });
}

// Toggle between grid and list views
gridButton.addEventListener("click", () => {
  membersContainer.classList.add("grid");
  membersContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
  membersContainer.classList.add("list");
  membersContainer.classList.remove("grid");
});

// Load members on page load
loadMembers();
