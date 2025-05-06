// Use setTimeout to resolve a Promise after 2 seconds
// Task: Create a promise that waits for 2 seconds using setTimeout and then resolves with "2 seconds have passed".

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("2 seconds have passed");
    }, 2000);
  });
  
  myPromise.then((message) => console.log(message));
  