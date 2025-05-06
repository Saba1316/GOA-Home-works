// display.js

// Import the default export (greeting object) from message.js using require
const greeting = require('./message');

// Log the greeting text and language to the console
console.log(`Greeting: ${greeting.text}`);
console.log(`Language: ${greeting.language}`);
