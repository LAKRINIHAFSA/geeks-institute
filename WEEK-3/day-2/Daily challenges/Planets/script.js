// Array of planet objects
// Each planet has a name, color, and number of moons
const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "orange", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "brown", moons: 4 },
  { name: "Saturn", color: "goldenrod", moons: 3 },
  { name: "Uranus", color: "lightblue", moons: 2 },
  { name: "Neptune", color: "darkblue", moons: 2 }
];

// Select the section where planets will be added
const section = document.querySelector(".listPlanets");

// Loop through each planet
planets.forEach(planet => {

  // Create a div for the planet
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");

  // Set the background color of the planet
  planetDiv.style.backgroundColor = planet.color;

  // Add planet name inside the div
  planetDiv.textContent = planet.name;

  // Create moons for the planet
  for (let i = 0; i < planet.moons; i++) {

    // Create moon div
    const moonDiv = document.createElement("div");
    moonDiv.classList.add("moon");

    // Position moons differently around the planet
    moonDiv.style.top = `${i * 20}px`;
    moonDiv.style.left = `${i * 20}px`;

    // Append moon to planet
    planetDiv.appendChild(moonDiv);
  }

  // Append planet to the section
  section.appendChild(planetDiv);
});
