// Create 3 for... of loops and also comment on which data types this type of loop can be used

// Example 1

const myMap = new Map([
    ['name', 'Saba'],
    ['age', 15],
    ['city', 'Vinland']
]);

for (const [key, value] of myMap) {
    console.log(key, value);
}
// Output:
// name Saba
// age 15
// city Vinland

// for...of works with Map objects, iterating over key-value pairs.


// Example 2

const uint8Array = new Uint8Array([10, 20, 30, 40]);

for (const num of uint8Array) {
    console.log(num);
}
// Output: 10 20 30 40

// for...of can also be used with Typed Arrays, which are array-like objects.


// Example 3

// Assuming you have some <div> elements in your HTML
const divs = document.querySelectorAll('div');

for (const div of divs) {
    console.log(div.textContent);
}
// Output: (text content of each <div> element)

// for...of works with NodeLists, like those returned by querySelectorAll().

// Map: Iterates over key-value pairs.
// Typed Arrays: Works with typed arrays like Uint8Array, Float32Array, etc.
// NodeList: Iterates over DOM NodeLists returned by methods like querySelectorAll().
// Array-like Objects: Also works with array-like objects like arguments, Set, and ArrayBuffer.