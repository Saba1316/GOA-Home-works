// Make 3 examples on Parameter Defaults

// Example 1

function greet(name, age = 30) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
}

greet("Sam"); 
// Output: Hello, Alice. You are 30 years old.

greet("Dean", 25);
// Output: Hello, Bob. You are 25 years old.

// Example 2

function calculatePrice(price, tax = price * 0.2) {
    return price + tax;
}

console.log(calculatePrice(100)); 
// Output: 120 (since default tax is 20% of the price)

console.log(calculatePrice(100, 30)); 
// Output: 130 (since tax is manually set to 30)

// Example 3

function createUser(username, role = "user") {
    console.log(`Username: ${username}, Role: ${role}`);
}

createUser("Sam"); 
// Output: Username: Alice, Role: user

createUser("Bobby", undefined); 
// Output: Username: Bob, Role: user

createUser("Charlie", "admin"); 
// Output: Username: Charlie, Role: admin