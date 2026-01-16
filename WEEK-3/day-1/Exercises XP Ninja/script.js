//Exercise 1 : Checking the BMI
// Object for the first person
const person1 = {
  fullName: "hafsa lakrini",
  mass: 70, // weight in kg
  height: 1.75, // height in meters

  // Method to calculate BMI
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

// Object for the second person
const person2 = {
  fullName: "dina nouri",
  mass: 85,
  height: 1.8,

  // Method to calculate BMI
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

// Function to compare BMI of two people
function compareBMI(p1, p2) {
  const bmi1 = p1.calcBMI();
  const bmi2 = p2.calcBMI();

  if (bmi1 > bmi2) {
    console.log(p1.fullName + " has the higher BMI");
  } else if (bmi2 > bmi1) {
    console.log(p2.fullName + " has the higher BMI");
  } else {
    console.log("Both have the same BMI");
  }
}

// Call the function
compareBMI(person1, person2);
//Exercise 2 : Grade Average

// Function to calculate the average of grades
function calculateAverage(gradesList) {
  let sum = 0;

  // Loop through the array
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }

  return sum / gradesList.length;
}

// Function that checks if the student passed or failed
function findAvg(gradesList) {
  const average = calculateAverage(gradesList);

  console.log("Average grade:", average);

  if (average >= 65) {
    console.log("You passed the course");
  } else {
    console.log("You failed and must repeat the course");
  }
}

// Example grades
const grades = [70, 80, 60, 90, 50];

// Call the function
findAvg(grades);
