// Create a function that takes a number as an argument and returns a random number from 0 to that number


function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  console.log(getRandomNumber(10));  // Random number between 0 and 10
  console.log(getRandomNumber(5));   // Random number between 0 and 5
  console.log(getRandomNumber(100)); // Random number between 0 and 100    