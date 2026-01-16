//  Exercise 5: Users

// Retrieve and log the container div
const container = document.getElementById("container");
console.log(container);

// Change "Pete" to "Richard"
const lists = document.querySelectorAll(".list");
const listItems = lists[0].querySelectorAll("li");
listItems[1].textContent = "Richard";

// Delete the second <li> of the second <ul>
const secondListItems = lists[1].querySelectorAll("li");
secondListItems[1].remove();

// Change the name of the first <li> of each <ul> to your name using a loop
const allLists = document.querySelectorAll(".list");
for (let list of allLists) {
  const firstItem = list.querySelector("li");
  if (firstItem) {
    firstItem.textContent = "HAFSA"; 
  }
}

// Add student_list class to both <ul> elements
for (let list of lists) {
  list.classList.add("student_list");
}

// Add university and attendance classes to first <ul>
lists[0].classList.add("university", "attendance");

// Add light blue background and padding to the container
container.style.backgroundColor = "lightblue";
container.style.padding = "20px";

// Hide the <li> containing "Dan"
const allListItems = document.querySelectorAll(".list li");
for (let item of allListItems) {
  if (item.textContent === "Dan") {
    item.style.display = "none";
  }
}

// Add border to <li> containing "Richard"
for (let item of allListItems) {
  if (item.textContent === "Richard") {
    item.style.border = "2px solid black";
  }
}

// Change font size of body
document.body.style.fontSize = "18px";

// Bonus: Alert if background color is light blue
if (window.getComputedStyle(container).backgroundColor === "rgb(173, 216, 230)") {
  const names = [];
  const items = lists[0].querySelectorAll("li");
  for (let item of items) {
    if (item.style.display !== "none") {
      names.push(item.textContent);
    }
  }
  alert("Hello " + names.join(" and "));
}
