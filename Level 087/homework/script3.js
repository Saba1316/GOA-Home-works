// Handle both resolve and reject outcomes
// Task: Write a promise that randomly either resolves with "Success!" or rejects with "Failed!" using Math.random(). Handle both outcomes with .then() and .catch().


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Success!");
      } else {
        reject(new Error("Failed!"));
      }
    }, 1000);
  });
  
  myPromise
    .then((message) => console.log("Resolved:", message))
    .catch((error) => console.error("Rejected:", error.message));  