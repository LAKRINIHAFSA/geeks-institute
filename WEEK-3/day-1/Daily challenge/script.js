//Daily challenge: Not Bad

// Create a sentence containing "not" and "bad"
let sentence = "This dinner is not that bad ! You cook well";

// Find the position of "not"
let wordNot = sentence.indexOf("not");

// Find the position of "bad"
let wordBad = sentence.indexOf("bad");

// Check if "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  // Replace "not...bad" with "good"
  let result =
    sentence.slice(0, wordNot) +
    "good" +
    sentence.slice(wordBad + 3);

  console.log(result);
} else {
  // If conditions are not met, print original sentence
  console.log(sentence);
}
//Daily challenge:  Stars
// Method : Single for loop
// Loop through each row (1 to 6)
for (let i = 1; i <= 6; i++) {
  // Create a string with i number of asterisks separated by spaces
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  // Print each row
  console.log(row);
}
