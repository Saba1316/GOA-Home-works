// Make 3 example on Rest/Spread

// Example 1

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));     // Output: 6
console.log(sum(5, 10, 15));   // Output: 30
console.log(sum(2, 4, 6, 8));  // Output: 20

// Example 2

const person = {
    name: "Sam",
    age: 25,
    city: "San Diego",
    country: "USA"
};

const { name, age, ...address } = person;

console.log(name);    // Output: Sam
console.log(age);     // Output: 25
console.log(address); // Output: { city: "San Diego", country: "USA" }

// Example 3

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combinedNumbers = [...numbers1, ...numbers2];

console.log(combinedNumbers); 
// Output: [1, 2, 3, 4, 5, 6]
