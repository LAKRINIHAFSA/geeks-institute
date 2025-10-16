//  Exercise 1: Bird class

class Bird {
  constructor() {
    console.log("I'm a bird. 🦢"); // Prints when Bird constructor runs
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸"); // Prints first
    super(); // Calls parent constructor (Bird)
  }
}

const pet = new Flamingo(); // Creates a Flamingo instance
