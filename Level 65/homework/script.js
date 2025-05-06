// Create any Array and use slice method 3 times


// Create an array of numbers
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// 1st slice: Get elements from index 2 to 5 (inclusive of index 2, exclusive of index 5)
let slice1 = numbers.slice(2, 6); // Start at index 2, end at index 6 (exclusive)
console.log("Slice 1:", slice1); // Output: [30, 40, 50, 60]

// 2nd slice: Get every other element from index 1 to 8 (inclusive of index 1, exclusive of index 8)
let slice2 = numbers.slice(1, 9).filter((_, index) => index % 2 === 0); // Start at index 1, end at index 9, then filter for every other element
console.log("Slice 2:", slice2); // Output: [20, 40, 60, 80]

// 3rd slice: Get elements from the beginning up to index 4 (exclusive of index 4)
let slice3 = numbers.slice(0, 4); // From the beginning to index 4 (exclusive)
console.log("Slice 3:", slice3); // Output: [10, 20, 30, 40]
