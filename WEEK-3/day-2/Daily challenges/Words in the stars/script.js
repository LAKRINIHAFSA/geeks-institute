// Prompt the user to enter words separated by commas
const input = prompt("Enter words separated by commas");

// Convert the input string into an array
// Split by comma and remove extra spaces
const words = input.split(",").map(word => word.trim());

// Find the length of the longest word
let maxLength = 0;
for (let word of words) {
  if (word.length > maxLength) {
    maxLength = word.length;
  }
}

// Create the top and bottom border using stars
const border = "*".repeat(maxLength + 4);

// Print the top border
console.log(border);

// Print each word inside the frame
for (let word of words) {
  // Calculate spaces needed to align words
  const spaces = " ".repeat(maxLength - word.length);
  console.log(`* ${word}${spaces} *`);
}

// Print the bottom border
console.log(border);
