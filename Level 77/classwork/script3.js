// Use the default parameter


// Using default parameters to set a default value for b if not provided
const multiplyNumbers = (a, b = 2) => {
    return a * b;
};

console.log(multiplyNumbers(5));  // Output: 10 (since b defaults to 2)
console.log(multiplyNumbers(5, 3));  // Output: 15 (b is provided as 3)
