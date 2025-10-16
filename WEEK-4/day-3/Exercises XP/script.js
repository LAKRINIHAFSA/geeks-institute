
    // Exercise 1 : Location
    // Analyze the code and check the output in the console

    const person = {
      name: 'John Doe',
      age: 25,
      location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
      }
    };

    //  Object destructuring (extracting values from nested objects)
    const { name, location: { country, city, coordinates: [lat, lng] } } = person;

    //  Display result in console
    console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
    //vWhen you run this in the console, the output will be:
 // I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


    // Exercise 2 : Display Student Info
    // Function to display the full name using object destructuring

    function displayStudentInfo({ first, last }) {
      // 🔹 Destructure 'first' and 'last' directly from the parameter object
      return `Your full name is ${first} ${last}`;
    }

    //Test the function
    console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));

    // Expected output:
    // Your full name is Elie Schoppik
    //exercises 3
  // Step 1: Create the object
const users = { user1: 18273, user2: 92833, user3: 90315 };

// Step 2: Turn the object into an array
const usersArray = Object.entries(users);
console.log(usersArray);
// Expected output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// Step 3: Multiply each ID by 2
const updatedUsers = usersArray.map(([key, value]) => [key, value * 2]);
console.log(updatedUsers);
// Expected output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// Exercise 4: Person class
// Create a class Person with a constructor, then create an instance and check its type

class Person {
  constructor(name) {
    this.name = name; // assign the name property
  }
}

const member = new Person('John'); // create a new Person instance
console.log(typeof member); // Output: "object"

// Exercise 5: Dog class
// Only option 2 correctly extends the Dog class using `super()` to call the parent constructor

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Correct way to extend Dog
class Labrador extends Dog {
  constructor(name, size) {
    super(name); // call parent constructor
    this.size = size; // add new property
  }
}

const lab = new Labrador('Buddy', 'Large');
console.log(lab.name); // Buddy
console.log(lab.size); // Large
// Exercise 6: Challenges

// Part 1: Evaluate expressions
console.log([2] === [2]); // false, because each array is a separate object in memory
console.log({} === {});   // false, because each object is stored at a different memory location

// Part 2: Object references
const object1 = { number: 5 }; 
const object2 = object1; // object2 references the same object as object1
const object3 = object2; // object3 also references the same object
const object4 = { number: 5}; // independent object

object1.number = 4; // modifying object1 changes object2 and object3, but not object4
console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5

// Part 3: Classes
class Animal {
  constructor(name, type, color) {
    this.name = name;   // set animal name
    this.type = type;   // set animal type
    this.color = color; // set animal color
  }
}

class Mammal extends Animal {
  sound(animalSound) {
    // return a string with the animal details and the sound it makes
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

// Part 4: Create an instance of Mammal
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo')); 
// Output: Moooo I'm a cow, named Lily and I'm brown and white
