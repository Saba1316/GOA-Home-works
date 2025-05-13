// Output in order: today's day (number) / month / year


// Get today's date
let today = new Date();

// Get day, month, and year
let day = today.getDate();        // Day of the month
let month = today.getMonth() + 1; // Month (0-indexed, so adding 1)
let year = today.getFullYear();   // Year

// Output in the format: day/month/year
console.log( day, month, year);
