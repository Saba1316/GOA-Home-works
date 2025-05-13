// Create a person class, give it 2 protected attributes and create getter functions to call them

// Define the Person class
class Person {
    // Constructor to initialize the protected attributes
    constructor(name, age) {
        this._name = name; // Protected attribute
        this._age = age;   // Protected attribute
    }

    // Getter method to get the name
    getName() {
        return this._name;
    }

    // Getter method to get the age
    getAge() {
        return this._age;
    }
}

// Create a new person object
let person1 = new Person("Saba", 15);

// Test the getter methods
console.log("Person 1 Name:", person1.getName()); // Output the name
console.log("Person 1 Age:", person1.getAge());   // Output the age