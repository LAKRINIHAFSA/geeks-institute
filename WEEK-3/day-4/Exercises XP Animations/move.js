// Function to handle box movement
function myMove() {
    const box = document.getElementById("animate");
    const container = document.getElementById("container");
    
    // Store the initial position
    let position = 0;
    
    // Calculate the maximum right position
    const maxPosition = container.offsetWidth - box.offsetWidth;
    
    // Start moving the box every 1 millisecond
    const moveIntervalId = setInterval(function() {
        // Check if the box reached the right edge
        if (position >= maxPosition) {
            clearInterval(moveIntervalId);
            return;
        }
        
        // Move the box 1px to the right
        position += 1;
        box.style.left = position + "px";
        
    }, 1); // 1 millisecond interval for smooth animation
}
