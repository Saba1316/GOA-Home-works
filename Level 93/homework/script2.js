// Array methods like map and filter

// 3 Examples

let numbers = [1, 2, 3];
let squares = numbers.map(n => n * n);
console.log(squares); // [1, 4, 9]


let numbers1 = [1, 2, 3, 4, 5];
let even = numbers.filter(n => n % 2 === 0);
console.log(even); // [2, 4]


let names = ["Ana", "Luka", "Nino"];
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames); // ["ANA", "LUKA", "NINO"]