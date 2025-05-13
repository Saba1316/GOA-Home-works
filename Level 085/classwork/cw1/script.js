// functions.js
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  function farewell(name) {
    return `Goodbye, ${name}!`;
  }
  
  // Exporting both functions
  module.exports = {
    greet,
    farewell
  };
  