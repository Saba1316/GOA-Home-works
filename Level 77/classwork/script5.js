// Create an instance of Computed Property Names

// Creating an object with computed property names
const keyName = 'age';
const person = {
    firstName: 'Saba',
    lastName: 'Giorgadze',
    [keyName]: 15, // Computed property name based on the variable 'keyName'
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName());  // Output: Saba Giorgadze
console.log(person.age);         // Output: 15 (accessing computed property)
