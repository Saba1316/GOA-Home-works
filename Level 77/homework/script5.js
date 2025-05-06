// Use the Object.assign() method 3 times

// Example 1

const person = { name: 'Saba', age: 15 };
const contact = { email: 'saba@example.com', phone: '568 94 65 53' };

const combined = Object.assign({}, person, contact);

console.log(combined);
// Output: { name: 'Saba', age: 15, email: 'saba@example.com', phone: '568 94 65 53' }

// Example 2

const car = { make: 'Toyota', model: 'Corolla' };

Object.assign(car, { year: 2020, color: 'red' });

console.log(car);
// Output: { make: 'Toyota', model: 'Corolla', year: 2020, color: 'red' }

// Example 3

const shape = { type: 'circle' };
const color = { color: 'blue' };
const size = { radius: 5 };

const extendedShape = Object.assign({}, shape, color, size);

console.log(extendedShape);
// Output: { type: 'circle', color: 'blue', radius: 5 }