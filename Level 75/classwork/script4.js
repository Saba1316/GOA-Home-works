// Use the ternary operator on 3 different examples

// Example 1:

const num = 10;
const result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);  // "Even"


// Example 2:


const age = 18;
const status = (age >= 18) ? "Adult" : "Minor";
console.log(status);  // "Adult"


// Example 3:


const userName = "";  // empty string
const displayName = userName || "Guest";
console.log(displayName);  // "Guest"
