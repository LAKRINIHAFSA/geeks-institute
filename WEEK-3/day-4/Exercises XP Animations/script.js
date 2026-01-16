// Part I: Display alert after 2 seconds
setTimeout(function() {
    alert("Hello World");
}, 2000);

// Part II: Add a paragraph to container after 2 seconds
setTimeout(function() {
    const container = document.getElementById("container");
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Hello World";
    container.appendChild(newParagraph);
}, 2000);

// Part III: Add a paragraph every 2 seconds with clearInterval functionality
let intervalId; // Variable to store the interval ID

function addParagraph() {
    const container = document.getElementById("container");
    
    // Count existing paragraphs
    const paragraphs = container.querySelectorAll("p");
    
    // If there are already 5 paragraphs, clear the interval
    if (paragraphs.length >= 5) {
        clearInterval(intervalId);
        return;
    }
    
    // Create and add new paragraph
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Hello World";
    container.appendChild(newParagraph);
}

// Start the interval (every 2 seconds)
intervalId = setInterval(addParagraph, 2000);

// Clear interval when the "clear" button is clicked
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
    clearInterval(intervalId);
});
