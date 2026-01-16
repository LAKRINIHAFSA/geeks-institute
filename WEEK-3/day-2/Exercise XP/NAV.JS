//  Exercise 6: Change the navbar

// Get the navbar div
const navBar = document.getElementById("navBar");

// Change the id from navBar to socialNetworkNavigation
navBar.setAttribute("id", "socialNetworkNavigation");

// Get the ul element
const ul = navBar.querySelector("ul");

// Create a new <li> element
const newLi = document.createElement("li");

// Create a new text node with "Logout"
const logoutText = document.createTextNode("Logout");

// Append the text node to the new <li>
newLi.appendChild(logoutText);

// Append the new <li> to the <ul>
ul.appendChild(newLi);

// Get the first and last <li> elements
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

// Display the text of the first link
console.log("First link text: " + firstLi.textContent);

// Display the text of the last link
console.log("Last link text: " + lastLi.textContent);
