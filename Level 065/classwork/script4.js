// Apply slicing to all three arrays


// Creating an array using the new Array() constructor with elements
let arrayWithElements = new Array('apple', 'banana', 'cherry', 'date', 'elderberry');

// Slicing elements from index 1 to 3
let slicedWithElements = arrayWithElements.slice(1, 3);
console.log(slicedWithElements); // ['banana', 'cherry']

// Slicing from index 2 to the end
let slicedFromIndex2WithElements = arrayWithElements.slice(2);
console.log(slicedFromIndex2WithElements); // ['cherry', 'date', 'elderberry']

// Slicing from the 2nd last element to the end (negative index)
let slicedNegativeWithElements = arrayWithElements.slice(-2);
console.log(slicedNegativeWithElements); // ['date', 'elderberry']
