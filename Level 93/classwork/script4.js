// Make 3 examples on Shorthand Property Names

// Example 1
const name = "Saba";
const age = 16;

const person = { name, age };
console.log(person); 
// Output: { name: "Saba", age: 16 }


// Example 2

const city = "New York";
const country = "USA";

const location = { city, country };
console.log(location);
// Output: { city: "New York", country: "USA" }

// Example 3

const brand = "Nike";
const model = "Air Max";
const price = 120;

const shoe = { brand, model, price: price };  // 'price' uses explicit assignment
console.log(shoe);
// Output: { brand: "Nike", model: "Air Max", price: 120 }