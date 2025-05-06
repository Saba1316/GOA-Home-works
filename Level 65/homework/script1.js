// Output the current, accurate time in the following format: "year/month/day/hour/second"


// Get the current date and time
let currentDate = new Date();

// Format the date and time in "year/month/day/hour/second"
let formattedTime = `${currentDate.getFullYear()}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getDate().toString().padStart(2, '0')}/${currentDate.getHours().toString().padStart(2, '0')}/${currentDate.getSeconds().toString().padStart(2, '0')}`;

console.log(formattedTime);