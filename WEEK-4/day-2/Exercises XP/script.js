//exercise 1 colors
// Given array
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Display colors with order
colors.map((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// Check if "Violet" exists
const hasViolet = colors.some(color => color === "Violet");

if (hasViolet) {
    console.log("Yeah");
} else {
    console.log("No...");
}
//exercise 2 colors#2
// Array of colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Array of ordinal suffixes
const ordinal = ["th", "st", "nd", "rd"];

// Loop through each color in the array
colors.forEach((color, index) => {
    // Determine the correct ordinal: 1st, 2nd, 3rd or 'th' for others
    let ord = (index + 1 <= 3) ? ordinal[index + 1] : ordinal[0];
    
    // Display the message
    console.log(`${index + 1}${ord} choice is ${color}.`);
});
//exerc 3-Analyzing
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// Output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
const country = "USA";
console.log([...country]);
// Output: ['U', 'S', 'A']

// Bonus
let newArray = [...[,,]];
console.log(newArray);
// Output: [undefined, undefined]
//exerc 4-Employees
const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

// 1. Map to welcome message
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);
// Output: ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

// 2. Filter Full Stack Residents
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);
// Output: Array of 3 users: Bradley, Chloe, Robert

// 3. Bonus: Chain filter + map to get lastNames of Full Stack Residents
const lastNamesFSR = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName);
console.log(lastNamesFSR);
// Output: ["Bouley", "Alnaji", "Hajek"]
//Exercise 5 : Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use reduce to combine all elements into a single string
const sentence = epic.reduce((acc, word) => acc + ' ' + word);
console.log(sentence);
// Output: "a long time ago in a galaxy far far away"
//Exercise 6 : Employees #2
const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

// Filter students who passed
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);

// Bonus: Congratulate each passed student
passedStudents.forEach(student => {
  console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
});



