// Create a chain of promises using .then()
// Task: Create a promise that resolves with the number 5. Chain multiple .then() calls to multiply the number by 2 in each step.

const myPromise = new Promise((resolve) => {
    resolve(5);
  });
  
  myPromise
    .then((num) => {
      console.log(num); // 5
      return num * 2;
    })
    .then((num) => {
      console.log(num); // 10
      return num * 2;
    })
    .then((num) => {
      console.log(num); // 20
      return num * 2;
    })
    .then((num) => {
      console.log(num); // 40
    });
  