// Exercise 1: Fetch data from Giphy API using the provided URL
const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url)
  .then(response => {
    // Check if the response is valid
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Log the received Javascript Object
    console.log(data);
  })
  .catch(error => {
    // Catch any errors that occur
    console.error("Fetch error:", error);
  });
// Exercise 2: giphy Api
const url2 = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2";

fetch(url2)
  .then(response => {
    // Check the network response status
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Log the received Javascript Object
    console.log(data);
  })
  .catch(error => {
    // Log any errors
    console.error("Fetch error:", error);
  });
// Exercise 3: Use async
const url3 = "https://www.swapi.tech/api/starships/9/";

async function getStarship() {
  try {
    // Await the GET request
    const response = await fetch(url3);
    // Check if the response is valid
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse as JSON
    const data = await response.json();
    // Log the result object
    console.log(data.result);
  } catch (error) {
    // Log any errors
    console.error("Fetch error:", error);
  }
}

getStarship();
// Exercise 4: Analyze 
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000); // Wait for 2 seconds
  });
}

async function asyncCall() {
  console.log('calling'); // Will log immediately
  let result = await resolveAfter2Seconds(); // Wait for the promise to resolve
  console.log(result); // Will log 'resolved' after 2 seconds
}

asyncCall();

// Outcome:
// - 'calling' is logged immediately
// - After 2 seconds, 'resolved' is logged

