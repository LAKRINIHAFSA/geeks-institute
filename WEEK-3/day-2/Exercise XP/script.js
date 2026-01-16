//Exercise 1 : Find numbers divisible by 23
// Function that displays numbers divisible by 23 from 0 to 500
function displayNumbersDivisible() {
  let sum = 0; // Variable to store the sum

  // Loop from 0 to 500
  for (let i = 0; i <= 500; i++) {

    // Check if the number is divisible by 23
    if (i % 23 === 0) {
      console.log(i);   // Display the number
      sum += i;         // Add the number to the sum
    }
  }

  // Display the final sum
  console.log("Sum :", sum);
}

// Call the function
displayNumbersDivisible();
//Bonus Version (with parameter divisor)

// Function that displays numbers divisible by a given divisor
function displayNumbersDivisible(divisor) {
  let sum = 0; // Store the sum of divisible numbers

  // Loop from 0 to 500
  for (let i = 0; i <= 500; i++) {

    // Check if i is divisible by the divisor
    if (i % divisor === 0) {
      console.log(i);   // Display the number
      sum += i;         // Add it to the sum
    }
  }

  // Display the sum
  console.log("Sum :", sum);
}

// Examples
displayNumbersDivisible(23);
displayNumbersDivisible(3);
displayNumbersDivisible(45);
//Exercise 2 : Shopping List
// Stock object
const stock = { 
  banana: 6, 
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1
};

// Prices object
const prices = {    
  banana: 4, 
  apple: 2, 
  pear: 1,
  orange: 1.5,
  blueberry: 10
};

// Shopping list array
const shoppingList = ["banana", "orange", "apple"];

// Function that calculates the total bill
function myBill() {
  let total = 0;

  // Loop through shopping list
  for (let item of shoppingList) {

    // Check if the item exists in stock and is available
    if (item in stock && stock[item] > 0) {
      total += prices[item]; // Add item price to total
      stock[item]--;         // Bonus: decrease stock by 1
    }
  }

  return total;
}

// Call the function
console.log("Total bill:", myBill());

// Exercise 3: What's in my wallet?

// Function to check if you have enough change
function changeEnough(itemPrice, amountOfChange) {
  // Define coin values in the order: quarters, dimes, nickels, pennies
  const coinValues = [0.25, 0.10, 0.05, 0.01];
  
  let totalChange = 0;
  
  // Calculate total change available
  for (let i = 0; i < amountOfChange.length; i++) {
    // Multiply coin count by coin value and add to total
    totalChange += amountOfChange[i] * coinValues[i];
  }
  
  // Return true if you can afford the item, false otherwise
  return totalChange >= itemPrice;
}

// Test cases
console.log(changeEnough(4.25, [25, 20, 5, 0]));  // true (8.50 >= 4.25)
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false (2.50 < 14.11)
console.log(changeEnough(0.75, [0, 0, 20, 5]));   // true (1.05 >= 0.75)

// Exercise 4: Vacations Costs

// Function to calculate hotel cost
function hotelCost() {
  // Ask user for number of nights
  let nights = prompt("How many nights would you like to stay?");
  
  // Validate input - must be a number
  while (!nights || isNaN(nights) || nights <= 0) {
    nights = prompt("Please enter a valid number of nights:");
  }
  
  // Hotel costs $140 per night
  return parseInt(nights) * 140;
}

// Function to calculate plane ride cost
function planeRideCost() {
  // Ask user for destination
  let destination = prompt("Where would you like to go?");
  
  // Validate input - must be a string
  while (!destination || typeof destination !== 'string' || destination.trim() === '') {
    destination = prompt("Please enter a valid destination:");
  }
  
  // Determine price based on destination
  const priceMap = {
    "London": 183,
    "Paris": 220
  };
  
  // Return price for destination, or 300 for other destinations
  return priceMap[destination] || 300;
}

// Function to calculate rental car cost
function rentalCarCost() {
  // Ask user for number of days
  let days = prompt("How many days would you like to rent the car?");
  
  // Validate input - must be a number
  while (!days || isNaN(days) || days <= 0) {
    days = prompt("Please enter a valid number of days:");
  }
  
  days = parseInt(days);
  
  // Car costs $40 per day
  let cost = days * 40;
  
  // Apply 5% discount if renting for more than 10 days
  if (days > 10) {
    cost = cost * 0.95;
  }
  
  return cost;
}

// Function to calculate total vacation cost
function totalVacationCost() {
  // Call all three cost functions
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();
  
  // Calculate total
  const total = hotel + plane + car;
  
  // Display the breakdown
  console.log("The car cost: $" + car);
  console.log("The hotel cost: $" + hotel);
  console.log("The plane tickets cost: $" + plane);
  console.log("Total vacation cost: $" + total);
  
  return total;
}

// Call the function to calculate total vacation cost
totalVacationCost();
