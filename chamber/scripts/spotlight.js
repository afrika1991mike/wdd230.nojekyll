// Path to the members.json file
const jsonDataPath = 'data/members.json';


// Function to fetch members from the JSON file
async function fetchMembers() {
    try {
        const response = await fetch(jsonDataPath);
        if (!response.ok) {
            throw new Error(`Failed to load data: ${response.statusText}`);
        }
        const members = await response.json();
        return members;
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

// Function to filter and randomly select spotlight members
function getSpotlightMembers(members) {
    // Filter members with "Silver" or "Gold" membership levels
    const eligibleMembers = members.filter(member =>
        member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold'
    );

    // Shuffle and select three random members
    const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3); // Get the first three after shuffling
}

// Function to display the spotlight members
function displaySpotlight(members) {
    const spotlightContainers = [
        document.querySelector('.spotlight1'),
        document.querySelector('.spotlight2'),
        document.querySelector('.spotlight3')
    ];

    members.forEach((member, index) => {
        if (spotlightContainers[index]) {
            spotlightContainers[index].innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <img src="images/${member.image}" alt="${member.name}" />
            `;
        }
    });
}

// Main function to initialize the spotlight feature
async function initSpotlight() {
    const members = await fetchMembers();
    if (members) {
        const spotlightMembers = getSpotlightMembers(members);
        displaySpotlight(spotlightMembers);
    }
}

// Call the initialization function on page load
document.addEventListener('DOMContentLoaded', initSpotlight);
