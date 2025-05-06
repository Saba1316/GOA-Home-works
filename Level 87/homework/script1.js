// Create a Promise that rejects with an error
// Task: Write a promise that rejects with the message "Something went wrong!" and handle the rejection with .catch().

const myPromise = new Promise((_, reject) => {
    reject(new Error("Something went wrong!"));
  });
  
  myPromise
    .then((message) => console.log(message)) // Won't run since it rejects
    .catch((error) => console.error(error.message));  