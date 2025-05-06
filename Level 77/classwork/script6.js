// Use the Object.assign() method


// Creating two objects to demonstrate Object.assign()
const person = {
    firstName: 'Saba',
    lastName: 'Giorgadze'
};

const additionalInfo = {
    age: 15,
    occupation: 'Programmer'
};

// Using Object.assign() to copy properties from additionalInfo into person
Object.assign(person, additionalInfo);

console.log(person);
// Output: { firstName: 'Saba', lastName: 'Giorgadze', age: 15, occupation: 'Programmer' }
