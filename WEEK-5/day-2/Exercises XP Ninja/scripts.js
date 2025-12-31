// Exercise 1: Giphy API #3

// Get your API key from the previous exercise
const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Create DOM elements: form, input, search button, and delete button
const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Category (e.g. cats)";
const btn = document.createElement("button");
btn.type = "submit";
btn.textContent = "Search GIFs";
const deleteBtn = document.createElement("button");
deleteBtn.type = "button";
deleteBtn.textContent = "Delete all GIFs";
form.appendChild(input);
form.appendChild(btn);
document.body.appendChild(form);
document.body.appendChild(deleteBtn);

// Event listener for form submission
form.addEventListener("submit", function(e) {
  e.preventDefault();
  // Construct Giphy API URL with the user's query
  const category = input.value.trim();
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(category)}&rating=g&api_key=${API_KEY}&limit=10`;
  // Fetch GIFs from Giphy API
  fetch(url)
    .then(response => {
      // Check if the response is OK
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      // Append each GIF to the page
      data.data.forEach(gifObj => {
        const img = document.createElement("img");
        // Use the fixed_height image URL
        img.src = gifObj.images.fixed_height.url;
        img.alt = category;
        document.body.appendChild(img);
      });
    })
    .catch(error => {
      // Log any errors
      console.error("Error fetching GIFs:", error);
    });
});

// Event listener for delete button to remove all GIF images
deleteBtn.addEventListener("click", function() {
  // Get all image elements from the body, except form/button elements
  document.querySelectorAll("img").forEach(img => img.remove());
});
// Exercise 2: Analyze #4

let resolveAfter2Seconds = function () {
  // Log starting slow promise
  console.log("starting slow promise");
  // Return a promise resolved after 2 seconds
  return new Promise(resolve => {
    setTimeout(function () {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
};

let resolveAfter1Second = function () {
  // Log starting fast promise
  console.log("starting fast promise");
  // Return a promise resolved after 1 second
  return new Promise(resolve => {
    setTimeout(function () {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
};

// concurrentPromise will wait for both promises to resolve
let concurrentPromise = function () {
  console.log('==CONCURRENT START with Promise.all==');
  // Start both promises at the same time and wait for both results
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()])
    .then((messages) => {
      // Log the messages
      console.log(messages[0]); // "slow"
      console.log(messages[1]); // "fast"
    });
};

// Start the function after 1 second timeout
setTimeout(concurrentPromise, 1000);

/*
Expected output order:
==CONCURRENT START with Promise.all==
starting slow promise
starting fast promise
fast promise is done
slow promise is done
slow
fast
*/
// Exercise 3:  Analyze #5

let resolveAfter2Seconds = function () {
  console.log("starting slow promise");
  return new Promise(resolve => {
    setTimeout(function () {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
};

let resolveAfter1Second = function () {
  console.log("starting fast promise");
  return new Promise(resolve => {
    setTimeout(function () {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
};

// parallel runs both jobs in parallel and waits for both to finish
let parallel = async function () {
  console.log('==PARALLEL with await Promise.all==');
  // Start two jobs and wait for both to complete
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))()
  ]);
};

setTimeout(parallel, 5000);

/*
Expected output order:
==PARALLEL with await Promise.all==
starting slow promise
starting fast promise
fast promise is done
slow promise is done
slow
fast
*/
// Exercise 4: Analyze #6

let resolveAfter2Seconds = function () {
  console.log("starting slow promise");
  return new Promise(resolve => {
    setTimeout(function () {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
};

let resolveAfter1Second = function () {
  console.log("starting fast promise");
  return new Promise(resolve => {
    setTimeout(function () {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
};

// parallelPromise runs .then for each promise separately
let parallelPromise = function () {
  console.log('==PARALLEL with Promise.then==');
  resolveAfter2Seconds().then(message => console.log(message));
  resolveAfter1Second().then(message => console.log(message));
};

setTimeout(parallelPromise, 13000);

/*
Expected output order:
==PARALLEL with Promise.then==
starting slow promise
starting fast promise
fast promise is done
slow promise is done
slow
fast
*/
