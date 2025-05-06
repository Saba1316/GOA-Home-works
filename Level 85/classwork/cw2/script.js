// functions.js

// Named export
export function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // Named export
  export function farewell(name) {
    return `Goodbye, ${name}!`;
  }
  
  // Default export
  export default function getRandomNumber() {
    return Math.floor(Math.random() * 100);
  }  