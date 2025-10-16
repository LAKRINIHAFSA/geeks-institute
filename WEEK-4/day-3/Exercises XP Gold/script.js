//  Exercise 1: printFullName

// Create a function that destructures the object directly from the parameter
function printFullName({ first, last }) {
  // Return the string in the required format
  return `Your full name is ${first} ${last}`;
}

// Test the function
console.log(printFullName({ first: 'Elie', last: 'Schoppik' }));
// Output: 'Your full name is Elie Schoppik'
// Exercise 2: keys and values

function keysAndValues(obj) {
  // Get the keys and sort them alphabetically
  const keys = Object.keys(obj).sort();

  // Map each key to its corresponding value
  const values = keys.map(key => obj[key]);

  // Return both arrays
  return [keys, values];
}

// Test cases
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// Output: [["a", "b", "c"], [1, 2, 3]]

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
// Output: [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
// Output: [["key1", "key2", "key3"], [true, false, undefined]]
//Exercise 3: Counter class

class Counter {
  constructor() {
    this.count = 0; // Initialize count to 0
  }

  increment() {
    this.count++; // Increase count by 1
  }
}

const counterOne = new Counter(); // Create a new Counter instance
counterOne.increment(); // count becomes 1
counterOne.increment(); // count becomes 2

const counterTwo = counterOne; // counterTwo references the same object as counterOne
counterTwo.increment(); // count becomes 3

console.log(counterOne.count); // Output: 3
