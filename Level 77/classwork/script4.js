// Create an object and create a method inside it (don't forget to use the this keyword)

// Creating an object with a method using the 'this' keyword
const person = {
    firstName: 'Saba',
    lastName: 'Giorgadze',
    age: 15,
    
    // Method inside the object
    fullName: function() {
        // Using 'this' to refer to the object properties
        return `${this.firstName} ${this.lastName}`;
    },

    // Another method to introduce the person
    introduce: function() {
        return `Hello, my name is ${this.fullName()} and I am ${this.age} years old.`;
    }
};

// Using the methods of the object
console.log(person.fullName());  // Output: Saba Giorgadze
console.log(person.introduce());  // Output: Hello, my name is Saba Giorgadze and I am 15 years old.
