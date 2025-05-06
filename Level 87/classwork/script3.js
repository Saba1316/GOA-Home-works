// Create a promise that either resolves or rejects, depending on a certain condition (in the function, use setTimeout so that it looks like getting information from a real server)


// Create a promise that either resolves or rejects based on a condition
function fetchDataFromServerWithCondition() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5; // Random condition (50% chance)
        
        if (success) {
          // Simulating a successful server response
          const data = { userId: 1, name: 'Saba', email: 'Saba.prom@example.com' };
          resolve(data); // Resolve the promise with the data
        } else {
          // Simulating a server error
          const error = new Error('Failed to fetch data. Please try again.');
          reject(error); // Reject the promise with an error
        }
      }, 2000); // 2-second delay
    });
  }
  
  // Using the promise
  fetchDataFromServerWithCondition()
    .then(result => {
      console.log('Data received:', result); // Logs data if resolved
    })
    .catch(error => {
      console.log('Error:', error.message); // Logs error if rejected
    });
  