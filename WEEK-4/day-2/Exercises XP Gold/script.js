//  Exercise 1 : Analyzing the map method
// Instructions: Analyze this code, what will be the output?
const result1 = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
console.log(result1); 
// Output: [2, 4, 6] 
// Explanation: Each element is a number, so it multiplies by 2 and returns a new array

//  Exercise 2: Analyzing the reduce method
// Instructions: Analyze this code, what will be the output?
const result2 = [[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
console.log(result2);
// Output: [1, 2, 0, 1, 2, 3]
// Explanation: Initial value [1,2], then concat each subarray of the main array

//  Exercise 3 : Analyze this code
// Instructions: Using this code, what is the value of i ?
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i); // i is the index of each element: 0,1,2,3,4,5
    // alert(num); // shows each number in an alert popup
    return num * 2;
});
console.log(newArray); 
// Output: [2,4,8,10,16,18]

//  Exercise 4 : Nested arrays
// Instructions: Flatten nested arrays

// 1. Modify [[1],[2],[3],[[[4]]],[[[5]]]] to [1,2,3,[4],[5]]
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const flatArray = array.map(el => (Array.isArray(el[0]) ? el[0] : el));
console.log(flatArray); 
// Output: [1,2,3,[4],[5]]

// 2. Modify [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]
// to ["Hello young grasshopper!","you are","learning fast!"]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const joinedGreeting = greeting.map(subArr => subArr.join(" "));
console.log(joinedGreeting); 
// Output: ["Hello young grasshopper!","you are","learning fast!"]

// 3. Turn the greeting array into a single string
const finalGreeting = joinedGreeting.join(" ");
console.log(finalGreeting); 
// Output: "Hello young grasshopper! you are learning fast!"

// 4. Turn the trapped number 3 into [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const flattenedTrapped = trapped.flat(Infinity);
console.log(flattenedTrapped); 
// Output: [3]
