// Simulate a network request using Promises
// Task: Create a promise that resolves with "Data fetched!" after 1 second. Use setTimeout to simulate the delay.


function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 1000);
    });
  }
  
  fetchData().then((message) => console.log(message));
  