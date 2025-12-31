// Get elements from the DOM
const displayZone = document.getElementById('display-zone');
const randomBtn = document.getElementById('random-btn');

// Function to show loading message
function showLoading() {
  displayZone.innerHTML = `
    <div class="loading">
      <i class="fas fa-spinner fa-spin"></i> Loading...
    </div>
  `;
}

// Function to show error message
function showError(message) {
  displayZone.innerHTML = `<div class="error"><i class="fas fa-exclamation-triangle"></i> ${message}</div>`;
}

// Function to get random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to fetch character info from API
async function fetchCharacterData(id) {
  const url = `https://www.swapi.tech/api/people/${id}`;
  try {
    // Show loading spinner
    showLoading();
    // Fetch main character data
    const res = await fetch(url);
    if (!res.ok) throw new Error("Could not fetch character...");
    const data = await res.json();
    const char = data.result.properties;
    // Fetch homeworld info
    const homeRes = await fetch(char.homeworld);
    if (!homeRes.ok) throw new Error("Could not fetch homeworld...");
    const homeData = await homeRes.json();

    // Display the character data on the DOM
    displayZone.innerHTML = `
      <div class="card">
        <h2>${char.name}</h2>
        <div class="info"><strong>Height:</strong> ${char.height} cm</div>
        <div class="info"><strong>Gender:</strong> ${char.gender}</div>
        <div class="info"><strong>Birth Year:</strong> ${char.birth_year}</div>
        <div class="info"><strong>Home World:</strong> ${homeData.result.properties.name}</div>
      </div>
    `;
  } catch (error) {
    // Show error message on the DOM
    showError(error.message);
  }
}

// Click event for random button
randomBtn.addEventListener('click', () => {
  // There are 83 characters: ids 1 to 83
  const randomId = getRandomInt(1, 83);
  fetchCharacterData(randomId);
});
