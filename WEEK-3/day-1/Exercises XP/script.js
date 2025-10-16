//Exercises XP
 //Exercise 1 : List of people
// Part 1 - Arrays

const people = ["Greg", "Mary", "Devon", "James"];

// 1)Remove "Greg"
people.shift(); // removes first element
console.log(people); // ["Mary", "Devon", "James"]

// 2) Replace "James" with "Jason"
people[people.indexOf("James")] = "Jason";
console.log(people); // ["Mary", "Devon", "Jason"]

// 3) Add your name to the end
people.push("Hafsa");
console.log(people); // ["Mary", "Devon", "Jason", "Hafsa"]

// 4) Console.log Mary's index
console.log(people.indexOf("Mary")); // 0

// 5) Make a copy excluding "Mary" and your name
const peopleCopy = people.slice(1, people.length - 1);
console.log(peopleCopy); // ["Devon", "Jason"]

// 6) Index of "Foo"
console.log(people.indexOf("Foo")); // -1 because "Foo" is not in array

// 7) Last element of array
const last = people[people.length - 1];
console.log(last); // "hafsa"


// Part 2 - Loops

// 1- Iterate through people array and console.log each person
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 2- Iterate and exit after logging "Devon"
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break; // exit loop
    }
}
// Exercise 2: Your favorite colors

// Step 1: Create an array of 5 favorite colors
const colors = ["pink", "purple", "blue", "mint", "peach"];

// Step 2: Loop through the array and log "My #1 choice is color"
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Step 3 (Bonus): Use correct suffixes 1st, 2nd, 3rd...
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

// Exercise 3: Repeat the question

// 1: Prompt the user for a number
let number = Number(prompt("Please enter a number:"));

// 2: Repeat asking while number is smaller than 10
while (number < 10) {
    number = Number(prompt("Number is too small! Please enter a new number:"));
}

//  3: Confirmation
console.log(`Thank you! You entered ${number}`);
 
// Exercise 3 : Repeat the question

// 1. Ask the user to enter a number
let userNumber = prompt("Enter a number:");

// 2. Convert the input (which is a string) into a number
userNumber  = Number(userNumber );

// 3. Display the data type in the console
console.log("Type of input:", typeof userNumber );

// 4. While the number is smaller than 10, keep asking for a new number
while (userNumber  < 10) {
  // Ask the user again
  userNumber = prompt("The number is too small! Please enter a new number:");
  // Convert again to number
  userNumber  = Number(userNumber );
}

// 5. When the number is 10 or greater, print a message
console.log("✅ Good! The number is 10 or greater:", userNumber );

// Exercise 4 : Building Management

// 1. Create the object
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

// 2. Console.log the number of floors
console.log("Number of floors in the building:", building.numberOfFloors);

// 3. Console.log how many apartments are on the 1st and 3rd floors
console.log(
  "Apartments on the 1st floor:",
  building.numberOfAptByFloor.firstFloor
);
console.log(
  "Apartments on the 3rd floor:",
  building.numberOfAptByFloor.thirdFloor
);

// 4. Console.log the name of the 2nd tenant and how many rooms he has
const secondTenant = building.nameOfTenants[1]; // index 1 = Dan
const danRooms = building.numberOfRoomsAndRent.dan[0]; // first element = number of rooms
console.log("Second tenant:", secondTenant, "has", danRooms, "rooms.");

// 5. Check if Sarah's + David's rent > Dan's rent
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200; // increase Dan's rent
  console.log("Dan’s rent has been increased to:", building.numberOfRoomsAndRent.dan[1]);
} else {
  console.log("No rent change needed for Dan.");
}
// Exercise 5 : Family

// 1. Create an object called family with key-value pairs
const family = {
  father: "Ahmed",
  mother: "Fatima",
  son: "Omar",
  daughter: "Sara",
};

// 2. Using a for...in loop, console.log the keys of the object
console.log("Keys of the family object:");
for (let key in family) {
  console.log(key);
}


// 3. Using a for...in loop, console.log the values of the object
console.log("Values of the family object:");
for (let key in family) {
  console.log(family[key]);
}
//Exercise 6 : Rudolf

// 1. Create the object
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

// 2. Using a for...in loop, print the sentence
let sentence = "";

for (let key in details) {
  sentence += key + " " + details[key] + " ";
}

// Remove the extra space at the end
sentence = sentence.trim();

// Print the sentence
console.log(sentence); 
//Exercise 7 : Secret Group

// 1. Create the array of names
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// 2. Create a variable to store the first letters
let firstLetters = [];

// 3. Loop through each name and get the first letter
for (let i = 0; i < names.length; i++) {
  firstLetters.push(names[i][0]);
}

// 4. Sort the letters alphabetically
firstLetters.sort();

// 5. Join the letters into a string
const secretSocietyName = firstLetters.join("");

// 6. Print the secret society name
console.log(secretSocietyName); // Output: "ABJKPS"




