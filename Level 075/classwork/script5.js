// Use the && operator on 3 different examples (as I did in class)


// Example 1:

const age = 25;
const hasPermission = true;

const canAccess = age >= 18 && hasPermission;
console.log(canAccess);  // true

// Example 2:

const isMorning = true;
const isWeekend = false;

const greeting = isMorning && isWeekend && "Good Morning, enjoy your weekend!";
console.log(greeting);  // false

// Example 3:

const isLoggedIn = true;
const isAdmin = true;

isLoggedIn && isAdmin && console.log("Welcome, Admin!");  // "Welcome, Admin!"
