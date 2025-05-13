// Create a 3 for... in loop and also comment on which data types this type of loop can be used

// Example 1

const student = {
    name: 'Saba',
    details: {
        age: 15,
        major: 'Computer Science',
    },
    enrolled: true,
};

for (const key in student) {
    console.log(key, student[key]);
}
// Output:
// name Saba
// details { age: 15, major: 'Computer Science' }
// enrolled true

// The for...in loop can be used to iterate over an object's properties, including nested objects.

// Example 2

const greeting = "Hello World";

for (const index in greeting) {
    console.log(index, greeting[index]);
}
// Output:
// 0 H
// 1 e
// 2 l
// 3 l
// 4 o
// 5 (space)
// 6 W
// 7 o
// 8 r
// 9 l
// 10 d

// for...in iterates over the indices (positions) of a string, not the characters themselves.

// Example 3

const fruitSet = new Set(['apple', 'banana', 'cherry']);

for (const item in fruitSet) {
    console.log(item);
}
// Output: 
// (This will show the indices of the set, as Set's iterator may not directly be accessible using `for...in`)

// for...in doesn't work as expected on Set because it doesn't iterate directly over Set values. 
// Instead, you would use for...of to properly iterate over Set values.