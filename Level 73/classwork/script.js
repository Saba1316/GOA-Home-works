// Explain how function hoisting, let/const hoisting works


// Function Hoisting
// In JavaScript, function hoisting refers to how function declarations are moved to the top of their containing scope during the compilation phase, 
// before the code is executed. This means you can call a function before its declaration in the code, and it will still work.


// let and const Hoisting
// Both let and const are hoisted in JavaScript, but they behave differently compared to var.

// What happens with let and const:
// The variables are hoisted, meaning JavaScript knows about them at the top of the block scope, but they aren’t initialized until the code execution reaches their declaration.


// You can safely use function declarations before their definition.
// Variables declared with var are accessible before their declaration but have an undefined value.
// Variables declared with let and const must be accessed after their declaration line in the code to avoid errors.