// Exercise 1:Giphy API #2
const url = "https://api.giphy.com/v1/gifs/search?q=cats&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url)
  .then(response => {
    // Check if the response is OK
    if (!response.ok) throw new Error("Network response was not ok");
    // Parse response as JSON
    return response.json();
  })
  .then(data => {
    // Choose a random gif from the results
    const gifsArray = data.data;
    // Get a random index
    const randomIndex = Math.floor(Math.random() * gifsArray.length);
    // Get the image URL (fixed_height version as example)
    const gifUrl = gifsArray[randomIndex].images.fixed_height.url;
    // Create image element
    const imgEl = document.createElement("img");
    imgEl.src = gifUrl;
    // Append to the document body
    document.body.appendChild(imgEl);
  })
  .catch(error => {
    // Catch and log any errors
    console.error("Error fetching GIF:", error);
  });
// Exercise 2: Analyze #2

let resolveAfter2Seconds = function () {
  // Log when starting the slow promise
  console.log("starting slow promise");
  // Return promise resolved after 2 seconds
  return new Promise(resolve => {
    setTimeout(function () {
      resolve("slow");
      // Log when slow promise is done
      console.log("slow promise is done");
    }, 2000);
  });
};

let resolveAfter1Second = function () {
  // Log when starting the fast promise
  console.log("starting fast promise");
  // Return promise resolved after 1 second
  return new Promise(resolve => {
    setTimeout(function () {
      resolve("fast");
      // Log when fast promise is done
      console.log("fast promise is done");
    }, 1000);
  });
};

let sequentialStart = async function () {
  // Logs immediately
  console.log("==SEQUENTIAL START==");
  // Await slow promise
  const slow = await resolveAfter2Seconds();
  console.log(slow); // Logs "slow"
  // Await fast promise
  const fast = await resolveAfter1Second();
  console.log(fast); // Logs "fast"
};

sequentialStart();

/*
Expected Output Order:
==SEQUENTIAL START==
starting slow promise
slow promise is done
slow
starting fast promise
fast promise is done
fast
*/
// Exercise 3: Analyze #3

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

let concurrentStart = async function () {
  // Logs immediately
  console.log("==CONCURRENT START with await==");
  // Start both promises without awaiting immediately
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();
  // Await slow and fast
  console.log(await slow); // Logs "slow" after 2 seconds
  console.log(await fast); // Logs "fast" after additional 1 second (total 3 seconds from start)
};

setTimeout(concurrentStart, 4000);

/*
Expected Output Order:
==CONCURRENT START with await==
starting slow promise
starting fast promise
fast promise is done
slow promise is done
slow
fast
*/
// Exercise 4: Modify fetch with Async/Await

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function () {
  try {
    // Await all fetch requests resolved as JSON, using async/await only
    const responses = await Promise.all(
      urls.map(async url => {
        const resp = await fetch(url);
        // Check if network response is OK
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
    );
    const [users, posts, albums] = responses;
    // Log each category of data
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (error) {
    // Log a custom error message if something fails
    console.log("ooooooops");
  }
};

getData();

// To test the catch block, change one URL to an invalid one
