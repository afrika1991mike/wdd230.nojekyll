// Define the URL for the JSON data
const jsonURL = './data/links.json'; // Adjust the path as per your folder structure

// Fetch JSON data and dynamically display it
async function fetchAndDisplayLinks() {
  try {
    const response = await fetch(jsonURL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error('Error fetching JSON data:', error);
  }
}

// Function to display links dynamically in the HTML
function displayLinks(weeks) {
  const section = document.querySelector('.card');
  section.innerHTML = '<h3>Learning Activities</h3><ul></ul>'; // Create a list container

  const ul = section.querySelector('ul');
  weeks.forEach(week => {
    const li = document.createElement('li'); // Create a list item for each week
    li.innerHTML = `<strong>${week.week}</strong>: `;

    // Create links for the week's activities
    week.links.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.textContent = link.title;
      li.appendChild(anchor);

      // Add space between multiple links
      li.appendChild(document.createTextNode(' '));
    });

    ul.appendChild(li);
  });
}

// Call the function to fetch and display links
fetchAndDisplayLinks();
