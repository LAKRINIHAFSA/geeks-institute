//exercise 1 :
// Create a function that returns a Promise
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    // If the number is less than or equal to 10, resolve the Promise
    if (num <= 10) {
      resolve("The number is less than or equal to 10 ");
    } 
    // If the number is greater than 10, reject the Promise
    else {
      reject("The number is greater than 10 ");
    }
  });
}

// Test 1: The number is greater than 10 (Promise should reject)
compareToTen(15)
  .then(result => console.log(result))   // This will not run
  .catch(error => console.log(error));   // Output: "The number is greater than 10 "

// Test 2: The number is less than or equal to 10 (Promise should resolve)
compareToTen(8)
  .then(result => console.log(result))   // Output: "The number is less than or equal to 10 "
  .catch(error => console.log(error));   // This will not run
  //Exercise 2 : Promises
// Create a new Promise
const promise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    resolve("success"); // After 4 seconds, the Promise is resolved with the value "success"
  }, 4000); // 4000 milliseconds = 4 seconds
});

// Handle the resolved value of the Promise
promise.then(result => console.log(result)); 
// Output after 4 seconds: "success"
// Exercise 3 : Resolve & Reject
// Create a Promise that is immediately resolved with the value 3
Promise.resolve(3)
  .then(result => console.log(result)); 
  // Output: 3

// Create a Promise that is immediately rejected with the error "Boo!"
Promise.reject("Boo!")
  .catch(error => console.log(error)); 
  // Output: Boo!
