// --------------------
// Array of quotes
// --------------------
let quotes = [
  { id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving.", likes: 0 },
  { id: 1, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 },
  { id: 2, author: "Maya Angelou", quote: "Try to be a rainbow in someone’s cloud.", likes: 0 },
  { id: 3, author: "Steve Jobs", quote: "Stay hungry, stay foolish.", likes: 0 },
  { id: 4, author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop.", likes: 0 }
];

// --------------------
// DOM Elements
// --------------------
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const likesText = document.getElementById("likes");
const generateBtn = document.getElementById("generate");
const charWithSpaces = document.getElementById("charWithSpaces");
const charWithoutSpaces = document.getElementById("charWithoutSpaces");
const wordCountBtn = document.getElementById("wordCount");
const likeBtn = document.getElementById("likeBtn");
const addQuoteBtn = document.getElementById("addQuoteBtn");
const newQuoteInput = document.getElementById("newQuote");
const newAuthorInput = document.getElementById("newAuthor");
const filterAuthorInput = document.getElementById("filterAuthor");
const filterBtn = document.getElementById("filterBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let lastQuote = null;
let currentQuote = null;
let filteredQuotes = [];
let currentFilterIndex = 0;

// --------------------
// Generate Random Quote
// --------------------
generateBtn.addEventListener("click", () => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastQuote);

  displayQuote(quotes[randomIndex]);
  lastQuote = randomIndex;
});

// Function to display quote in DOM
function displayQuote(quoteObj) {
  quoteText.textContent = `"${quoteObj.quote}"`;
  authorText.textContent = `— ${quoteObj.author}`;
  likesText.textContent = `❤️ Likes: ${quoteObj.likes}`;
  currentQuote = quoteObj;
}

// --------------------
// Count characters and words
// --------------------
charWithSpaces.addEventListener("click", () => {
  alert(`Characters (with spaces): ${currentQuote.quote.length}`);
});

charWithoutSpaces.addEventListener("click", () => {
  const withoutSpaces = currentQuote.quote.replace(/\s+/g, '');
  alert(`Characters (no spaces): ${withoutSpaces.length}`);
});

wordCountBtn.addEventListener("click", () => {
  const words = currentQuote.quote.trim().split(/\s+/);
  alert(`Words: ${words.length}`);
});

// --------------------
// Like Button
// --------------------
likeBtn.addEventListener("click", () => {
  currentQuote.likes++;
  likesText.textContent = `❤️ Likes: ${currentQuote.likes}`;
});

// --------------------
// Add New Quote
// --------------------
addQuoteBtn.addEventListener("click", () => {
  const newQuote = newQuoteInput.value.trim();
  const newAuthor = newAuthorInput.value.trim();

  if (newQuote && newAuthor) {
    const newId = quotes.length;
    quotes.push({ id: newId, author: newAuthor, quote: newQuote, likes: 0 });
    alert("New quote added successfully!");
    newQuoteInput.value = "";
    newAuthorInput.value = "";
  } else {
    alert("Please fill in both fields!");
  }
});

// --------------------
// Filter Quotes by Author
// --------------------
filterBtn.addEventListener("click", () => {
  const authorName = filterAuthorInput.value.trim().toLowerCase();
  filteredQuotes = quotes.filter(q => q.author.toLowerCase().includes(authorName));

  if (filteredQuotes.length > 0) {
    currentFilterIndex = 0;
    displayQuote(filteredQuotes[currentFilterIndex]);
  } else {
    alert("No quotes found for this author!");
  }
});

// Next and Previous buttons for filtered quotes
nextBtn.addEventListener("click", () => {
  if (filteredQuotes.length > 0 && currentFilterIndex < filteredQuotes.length - 1) {
    currentFilterIndex++;
    displayQuote(filteredQuotes[currentFilterIndex]);
  }
});

prevBtn.addEventListener("click", () => {
  if (filteredQuotes.length > 0 && currentFilterIndex > 0) {
    currentFilterIndex--;
    displayQuote(filteredQuotes[currentFilterIndex]);
  }
});
