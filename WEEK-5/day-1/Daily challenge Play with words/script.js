//1st daily challenge
// First function: makeAllCaps
function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    // Check if all elements are strings
    if (arr.every(word => typeof word === "string")) {
      resolve(arr.map(word => word.toUpperCase())); // Convert all to uppercase
    } else {
      reject("Error: Not all items are strings! ");
    }
  });
}

// Second function: sortWords
function sortWords(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length > 4) {
      resolve(arr.sort()); // Sort alphabetically
    } else {
      reject("Error: Array length is not bigger than 4! ");
    }
  });
}

// TEST EXAMPLES

// Example 1: contains a number -> catch runs
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error)); // Output: Error: Not all items are strings! 

// Example 2: length <= 4 -> catch runs
makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error)); // Output: Error: Array length is not bigger than 4! 

// Example 3: correct input -> resolves
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result)) 
  // Output: ["APPLE","BANANA","KIWI","MELON","PEAR"]
  .catch(error => console.log(error));
  //2nd Daily Challenge
  // Provided Morse JSON string
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// Function 1: Convert JSON string to JS object
function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse);
    if (Object.keys(morseJS).length === 0) {
      reject("Error: Morse object is empty! ");
    } else {
      resolve(morseJS);
    }
  });
}

// Function 2: Translate word to Morse
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence:").toLowerCase();
    const morseTranslation = [];
    
    for (let char of userInput) {
      if (morseJS[char]) {
        morseTranslation.push(morseJS[char]);
      } else {
        reject(`Error: Character "${char}" does not exist in Morse code! `);
        return;
      }
    }
    
    resolve(morseTranslation);
  });
}

// Function 3: Display on page
function joinWords(morseTranslation) {
  return new Promise((resolve) => {
    const output = morseTranslation.join("\n"); // Join with line breaks
    const pre = document.createElement("pre");
    pre.textContent = output;
    document.body.appendChild(pre);
    resolve("Morse code displayed on the page ");
  });
}

// Chain the functions
toJs()
  .then(morseObj => toMorse(morseObj))
  .then(translated => joinWords(translated))
  .then(msg => console.log(msg))
  .catch(error => console.log(error));

