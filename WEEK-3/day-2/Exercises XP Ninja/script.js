//Exercise 1: Random Number
// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the random number
console.log("Random number is:", randomNumber);

// Loop from 0 to the random number
for (let i = 0; i <= randomNumber; i++) {

  // Check if the number is even
  if (i % 2 === 0) {
    console.log(i);
  }

}
//Exercise 2: Capitalized letters
// Function that takes a lowercase string with no spaces
function capitalize(str) {

  let evenCaps = ""; // String for even indexes capitalized
  let oddCaps = "";  // String for odd indexes capitalized

  // Loop through each character of the string
  for (let i = 0; i < str.length; i++) {

    // If index is even
    if (i % 2 === 0) {
      evenCaps += str[i].toUpperCase(); // Capitalize even index
      oddCaps += str[i];               // Keep lowercase for odd string
    } 
    // If index is odd
    else {
      evenCaps += str[i];               // Keep lowercase for even string
      oddCaps += str[i].toUpperCase();  // Capitalize odd index
    }
  }

  // Return both results in an array
  return [evenCaps, oddCaps];
}

// Example test
console.log(capitalize("abcdef"));
// Output: ['AbCdEf', 'aBcDeF']
//Exercise 3 : Is palindrome?

// Function to check if a string is a palindrome
function isPalindrome(word) {

  // Reverse the string
  let reversedWord = word.split("").reverse().join("");

  // Compare original word with reversed word
  if (word === reversedWord) {
    return true; // It is a palindrome
  } else {
    return false; // It is not a palindrome
  }
}

// Examples
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("bob"));   // true
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("hello")); // false
// Exercise 4 : Biggest number
// Function that returns the biggest number in an array
function biggestNumberInArray(arrayNumber) {

  // If the array is empty, return 0
  if (arrayNumber.length === 0) {
    return 0;
  }

  // Variable to store the biggest number
  let biggest = null;

  // Loop through the array
  for (let i = 0; i < arrayNumber.length; i++) {

    // Check if the element is a number
    if (typeof arrayNumber[i] === "number") {

      // If biggest is null or current number is bigger
      if (biggest === null || arrayNumber[i] > biggest) {
        biggest = arrayNumber[i];
      }
    }
  }

  // If no numbers were found, return 0
  if (biggest === null) {
    return 0;
  }

  return biggest;
}

// Examples
console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99])); // 100
console.log(biggestNumberInArray(['a', 3, 4, 2]));            // 4
console.log(biggestNumberInArray([]));                       // 0
// Exercise 5 : Unique Elements
// Function that returns only unique elements from an array
function getUniqueElements(array) {

  // Create an empty array to store unique values
  let uniqueArray = [];

  // Loop through the original array
  for (let i = 0; i < array.length; i++) {

    // If the element is not already in uniqueArray, add it
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }

  // Return the array with unique elements
  return uniqueArray;
}

// Example
let list = [1, 2, 3, 3, 3, 3, 4, 5];
let newList = getUniqueElements(list);

console.log(newList); // [1, 2, 3, 4, 5]
//