// Select DOM elements
const screen = document.getElementById("screen");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const randomBtn = document.getElementById("randomBtn");

// Total number of Pokémon in the API (first generation)
const MAX_ID = 1010;
let currentId = 1; // Keep track of current displayed Pokémon

// Show loading message
function showLoading() {
  screen.innerHTML = `<span class="loading">Loading...</span>`;
}

// Show error message
function showError(message) {
  screen.innerHTML = `<span class="error">Oh no! That Pokémon isn’t available…<br>${message}</span>`;
}

// Show Pokémon data
function showPokemon(pokemon) {
  screen.innerHTML = `
    <img class="pokemon" src="${pokemon.sprites.front_default || ''}" alt="${pokemon.name}">
    <div><strong>Name:</strong> ${pokemon.name}</div>
    <div><strong>ID:</strong> ${pokemon.id}</div>
    <div><strong>Height:</strong> ${pokemon.height} dm</div>
    <div><strong>Weight:</strong> ${pokemon.weight} hg</div>
    <div><strong>Type:</strong> <span class="type">${pokemon.types.map(t => t.type.name).join(', ')}</span></div>
  `;
}

// Async function to fetch Pokémon by ID
async function fetchPokemon(id) {
  showLoading();
  try {
    // Fetch data from PokeAPI
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) throw new Error(`Not found (ID: ${id})`);
    const data = await res.json();
    currentId = data.id; // Update global tracker
    showPokemon(data);
  } catch (error) {
    showError(error.message);
  }
}

// Event for Previous button
prevBtn.addEventListener("click", async () => {
  if (currentId > 1) {
    await fetchPokemon(currentId - 1);
  }
});

// Event for Next button
nextBtn.addEventListener("click", async () => {
  if (currentId < MAX_ID) {
    await fetchPokemon(currentId + 1);
  }
});

// Event for Random button
randomBtn.addEventListener("click", async () => {
  const randomId = Math.floor(Math.random() * MAX_ID) + 1;
  await fetchPokemon(randomId);
});

// Load the first Pokémon on page load
fetchPokemon(currentId);
