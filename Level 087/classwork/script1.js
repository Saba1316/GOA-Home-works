// Create a promise that resolves (use setTimeout in the function to have the appearance of retrieving information from a real server)

// Create a promise that resolves after a delay (simulating a server request)
function fetchDataFromServer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating successful data retrieval after 2 seconds
        const data = { userId: 1, name: 'Saba', email: 'Saba.prom@example.com' };
        resolve(data); // Resolving the promise with the data
      }, 2000); // 2-second delay
    });
  }
  
  // Using the promise
  fetchDataFromServer()
    .then(result => {
      console.log('Data received:', result); // Logs the data when the promise resolves
    })
    .catch(error => {
      console.log('Error:', error); // Logs if there is an error (not used in this example)
    });
  