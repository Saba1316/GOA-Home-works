// Create an interval that will count to 30 and then stop


let count = 0;  // Initialize the count

// Create an interval that runs every 1000ms (1 second)
let intervalId = setInterval(function() {
  count++;  // Increment the count by 1
  console.log(count);  // Log the current count
  
  // If count reaches 30, stop the interval
  if (count === 30) {
    clearInterval(intervalId);  // Stop the interval
    console.log('Counting stopped at 30');
  }
}, 1000);  // Set interval to run every 1 second
