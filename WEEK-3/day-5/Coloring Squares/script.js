// Get grid container and color picker
const grid = document.getElementById("grid");
const colorPicker = document.getElementById("color");
const presetButtons = document.querySelectorAll(".preset");
const clearButton = document.getElementById("clear");

let isDrawing = false; // Track when the user is drawing

// Create the grid (30x30 = 900 squares)
for (let i = 0; i < 900; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  grid.appendChild(square);

  // When user clicks on a square
  square.addEventListener("mousedown", () => {
    isDrawing = true;
    square.style.background = colorPicker.value;
  });

  // While dragging over squares
  square.addEventListener("mouseover", () => {
    if (isDrawing) {
      square.style.background = colorPicker.value;
    }
  });

  // When user releases the mouse
  square.addEventListener("mouseup", () => {
    isDrawing = false;
  });
}

// Stop drawing when mouse released outside the grid
document.body.addEventListener("mouseup", () => {
  isDrawing = false;
});

// Handle preset color buttons
presetButtons.forEach(button => {
  button.addEventListener("click", () => {
    const color = button.getAttribute("data-color");
    colorPicker.value = color; // Update the color picker
  });
});
// Get the clear button

clearButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.style.background = "white"; // Reset color
  });
});
