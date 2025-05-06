// Create a promise that rejects (use setTimeout in the function to have the appearance of receiving information from a real server)

// Create a promise that rejects after a delay (simulating a server error)
function fetchDataFromServerWithError() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating an error (e.g., server failed to respond)
        const error = new Error('Server not found. Please try again later.');
        reject(error); // Rejecting the promise with an error
      }, 2000); // 2-second delay
    });
  }
  
  // Using the promise
  fetchDataFromServerWithError()
    .then(result => {
      console.log('Data received:', result); // This won't be called since the promise is rejected
    })
    .catch(error => {
      console.log('Error:', error.message); // Logs the error message when the promise is rejected
    });
  