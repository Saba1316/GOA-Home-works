// Create 3 different objects and create a method inside each one (don't forget to use this keyword)

// Example 1

const counter = {
    count: 0,
    increment: function() {
        this.count += 1;
        return this.count;
    }
};

console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2

// Example 2

const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2015,
    calculateAge: function(currentYear) {
        return currentYear - this.year;
    }
};

console.log(car.calculateAge(2025)); // Output: 10

// Example 3

const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    getInfo: function() {
        return `${this.title} by ${this.author}, published in ${this.year}.`;
    }
};

console.log(book.getInfo()); // Output: The Great Gatsby by F. Scott Fitzgerald, published in 1925.