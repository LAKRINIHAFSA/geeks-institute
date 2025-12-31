// Daily Challenge: 

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Create form elements: input and search button
const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter category (e.g. sun)";
const btn = document.createElement("button");
btn.type = "submit";
btn.textContent = "Search Random GIF";
form.appendChild(input);
form.appendChild(btn);
document.body.appendChild(form);

// Create Delete All button
const deleteAllBtn = document.createElement("button");
deleteAllBtn.textContent = "DELETE ALL";
deleteAllBtn.type = "button";
document.body.appendChild(deleteAllBtn);

// Function to add a GIF and its delete button to the DOM
function addGifToPage(gifUrl) {
  // Create a container for the GIF and its delete button
  const container = document.createElement("div");
  container.style.display = "inline-block";
  container.style.margin = "8px";
  // Create the GIF image
  const img = document.createElement("img");
  img.src = gifUrl;
  img.style.maxHeight = "150px";
  img.style.display = "block";
  img.style.marginBottom = "4px";
  // Create the individual delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteBtn.type = "button";
  // When clicking delete, remove just this GIF container
  deleteBtn.onclick = () => container.remove();
  // Add elements to container and the page
  container.appendChild(img);
  container.appendChild(deleteBtn);
  document.body.appendChild(container);
}

// Fetch one random GIF when the form is submitted
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const category = input.value.trim();
  if (!category) return;
  // Prepare Random endpoint URL with user’s search category
  const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(category)}&rating=g`;
  // Fetch from Giphy API
  fetch(apiUrl)
    .then(response => {
      // Ensure response is OK
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      // Find the gif URL inside “images”
      const gifUrl = data.data.images.fixed_height.url;
      addGifToPage(gifUrl);
    })
    .catch(error => {
      // Log errors if fetch or parsing fails
      console.error("Error fetching GIF:", error);
    });
});

// Remove all GIF containers when "DELETE ALL" is clicked
deleteAllBtn.onclick = () => {
  document.querySelectorAll("div").forEach(div => div.remove());
};

