// Create a 3 for... in loop and also comment on which data types this type of loop can be used

// Example 1

// This loop can iterate over the keys of an object (non-iterable data type).
const person = {
    name: 'Saba',
    age: 15,
    occupation: 'Programmer'
};

for (const key in person) {
    console.log(key);  // Output: name, age, occupation
    console.log(person[key]);  // Output: Saba, 15, Programmer
}


// Example 2

// This loop can iterate over the indices of an array (although not recommended for data access in arrays).
const colors = ['red', 'green', 'blue'];

for (const index in colors) {
    console.log(index);  // Output: 0, 1, 2 (array indexes)
    console.log(colors[index]);  // Output: red, green, blue
}

// Example 3

// This loop can iterate over the indices of a string (non-iterable data type).
const word = "hello";

for (const index in word) {
    console.log(index);  // Output: 0, 1, 2, 3, 4 (indices)
    console.log(word[index]);  // Output: h, e, l, l, o
}
