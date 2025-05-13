// Create an if else statement

let number = prompt("Enter a number:");

if (isNaN(number)) {
    console.log("That's not a valid number.");
} else if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
