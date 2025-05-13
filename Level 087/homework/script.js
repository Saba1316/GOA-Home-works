// Create a basic Promise that resolves immediately
// Task: Use the Promise constructor to create a promise that resolves with the message "Hello, Promise!".

const myPromise = new Promise((resolve) => {
    resolve("Hello, Promise!");
  });
  
  myPromise.then((message) => console.log(message));  