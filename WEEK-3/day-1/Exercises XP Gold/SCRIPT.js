// Exercise 1: Divisible by three
let numbers = [123, 8409, 100053, 333333333, 7];

// Loop through the array and check if each number is divisible by three
for (let i = 0; i < numbers.length; i++) {
  // Check if the current number is divisible by 3 (remainder is 0)
  console.log(numbers[i] % 3 === 0);
}
// Exercise 2: Attendance
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

// Prompt the user to enter their name
let studentName = prompt("What is your name?");

// Check if the name exists in the guestList object using 'in' operator
if (studentName in guestList) {
  // If the name is found, display greeting with name and country
  console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`);
} else {
  // If the name is not found, display guest message
  console.log("Hi! I'm a guest.");
}
// Exercise 3: Playing with numbers
let age = [20, 5, 12, 43, 98, 55];

// Requirement 1: Calculate the sum of all numbers in the array
let sum = 0;

// Loop through the array and add each number to the sum variable
for (let i = 0; i < age.length; i++) {
  sum += age[i];
}

// Display the sum
console.log(sum);

// Requirement 2: Find the highest age in the array
let highestAge = age[0];

// Loop through the array starting from index 1 to find maximum value
for (let i = 1; i < age.length; i++) {
  // Compare current number with highest age and update if greater
  if (age[i] > highestAge) {
    highestAge = age[i];
  }
}

// Display the highest age
console.log(highestAge);
