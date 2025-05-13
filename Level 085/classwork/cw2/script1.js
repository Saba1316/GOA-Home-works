import { greet, farewell } from './functions';
import getRandomNumber from './functions';

const name = 'John';

console.log(greet(name));           // Output: Hello, John!
console.log(farewell(name));        // Output: Goodbye, John!
console.log(getRandomNumber());    // Output: Random number between 0 and 99