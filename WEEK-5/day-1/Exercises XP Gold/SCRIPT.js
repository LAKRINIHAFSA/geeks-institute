//exercise 1
// Create 3 promises/values
const promise1 = Promise.resolve(3);
const promise2 = 42; // non-promise value, treated as a resolved promise
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo'); // resolves after 3 seconds with 'foo'
});

// Use Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results)) // Output: [3, 42, "foo"]
  .catch(error => console.log(error));

/*
Explanation:
- Promise.all takes an array of promises (or values).
- It waits for all promises to resolve.
- If all succeed, it returns an array of their resolved values in the same order.
- If any promise rejects, Promise.all immediately rejects with that reason.
- In this example:
  - promise1 resolves immediately with 3
  - promise2 is a normal value, treated as a resolved promise (42)
  - promise3 resolves after 3 seconds with 'foo'
- Therefore, after 3 seconds, Promise.all resolves with [3, 42, "foo"]
*/
//Exercise 2
// Function that returns a Promise which resolves with x*2
function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

// Array of numbers
const arr = [1, 2, 3];

// Map each number to a promise using timesTwoAsync
const promiseArr = arr.map(timesTwoAsync);

// Use Promise.all to wait for all promises to resolve
Promise.all(promiseArr)
  .then(result => {
    console.log(result); // Output: [2, 4, 6]
  })
  .catch(error => console.log(error));

/*
Explanation:
1. timesTwoAsync(x) returns a Promise that resolves immediately with x*2.
2. arr.map(timesTwoAsync) creates an array of Promises: 
   [Promise(2), Promise(4), Promise(6)]
3. Promise.all waits for all promises in promiseArr to resolve.
4. Once all promises resolve, it returns an array of resolved values in the same order.
5. Therefore, the output is: [2, 4, 6]
*/
