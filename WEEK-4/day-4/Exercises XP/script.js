//ex 3
// Original JS object
const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
};

// Convert JS object into JSON string
const marioJSON = JSON.stringify(marioGame);
console.log("JSON string:", marioJSON);

// Pretty print JSON
const marioPrettyJSON = JSON.stringify(marioGame, null, 2);
console.log("Pretty JSON:\n", marioPrettyJSON);
