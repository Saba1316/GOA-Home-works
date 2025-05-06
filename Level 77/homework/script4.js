// Create 3 instances of Computed Property Names

// Example 1

const prefix = 'user_';
const suffix = 'id';

const user = {
    [`${prefix}${suffix}`]: 12345
};

console.log(user.user_id); // Output: 12345

// Example 2

const type = 'status';
const getStatus = (type) => type.toUpperCase();

const order = {
    [getStatus(type)]: 'shipped'
};

console.log(order.STATUS); // Output: shipped

// Example 3

const index = 1;
const myArray = {
    [`item${index}`]: 'apple'
};

console.log(myArray.item1); // Output: apple