// Use 3 examples of the rest operator

// Example 1

const first = [1, 2];
const second = [3, 4, 5];

const combined = [...first, ...second];
console.log(combined); // [1, 2, 3, 4, 5]

// Example 2

class Logger {
    logMessage(message, ...tags) {
      console.log(`Message: ${message}`);
      console.log(`Tags: ${tags.join(', ')}`);
    }
  }
  
  const logger = new Logger();
  logger.logMessage('Hello World', 'greeting', 'world', 'example');
  // Output:
  // Message: Hello World
  // Tags: greeting, world, example

// Example 3

const user = { name: 'Saba', age: 15, city: 'Tbilisi' };
const address = { city: 'Tbilisi', country: 'Georgia' };

const merged = { ...user, ...address };
console.log(merged); // { name: 'Saba', age: 15, city: 'Los Angeles', country: 'USA' }
