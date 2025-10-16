// Function that checks if all parameters are truthy
function allTruthy(...args) {
  // Use the Array.every() method to check each value
  return args.every(value => Boolean(value));
}

// Testing the function
console.log(allTruthy(true, true, true)); // ➞ true
console.log(allTruthy(true, false, true)); // ➞ false
console.log(allTruthy(5, 4, 3, 2, 1, 0)); // ➞ false
