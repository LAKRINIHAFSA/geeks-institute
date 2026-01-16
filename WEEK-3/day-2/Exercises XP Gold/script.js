// Exercise 1: isBlank
// Function to check if a string is blank or not
function isBlank(str) {
  // Return true if string is empty, false otherwise
  return str === '';
}

// Test cases
console.log(isBlank('')); // true
console.log(isBlank('abc')); // false

// Exercise 2: Abbreviate Name
// Function to convert full name to abbreviated form
function abbrevName(fullName) {
  // Split the name into parts using space as separator
  let nameParts = fullName.split(' ');
  
  // Get the first name
  let firstName = nameParts[0];
  
  // Get the last name and take only first letter
  let lastNameInitial = nameParts[1].charAt(0).toUpperCase();
  
  // Return abbreviated name format: FirstName L.
  return firstName + ' ' + lastNameInitial + '.';
}

// Test case
console.log(abbrevName("Robin Singh")); // "Robin S."

// Exercise 3: Swap Case
// Function to swap the case of each character in a string
function swapCase(str) {
  // Initialize result variable
  let result = '';
  
  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    // Check if character is uppercase
    if (char === char.toUpperCase()) {
      // Convert to lowercase
      result += char.toLowerCase();
    }
    // Check if character is lowercase
    else if (char === char.toLowerCase()) {
      // Convert to uppercase
      result += char.toUpperCase();
    }
    // Keep spaces and special characters unchanged
    else {
      result += char;
    }
  }
  
  return result;
}

// Test case
console.log(swapCase('The Quick Brown Fox')); // "tHE qUICK bROWN fOX"

// Exercise 4: Omnipresent Value
// Function to determine if a value exists in every subarray
function isOmnipresent(arr, value) {
  // Loop through each subarray
  for (let subarray of arr) {
    // Check if the value is NOT in the current subarray
    if (!subarray.includes(value)) {
      // If value is missing in any subarray, return false
      return false;
    }
  }
  
  // If value is in all subarrays, return true
  return true;
}

// Test cases
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // false
console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]], 3)); // true

