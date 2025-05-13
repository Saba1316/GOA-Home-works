// Create a car class, give it 4 attributes and create 2 functions in the class. Create 3 objects from this class and test all attribute output and methods on all three.

// Define the Car class
class Car {
    // Constructor to initialize the attributes
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    // Method to simulate starting the engine
    startEngine() {
        return `The ${this.year} ${this.make} ${this.model} engine is now running.`;
    }

    // Method to get the car information
    getInfo() {
        return `${this.year} ${this.make} ${this.model}, Color: ${this.color}`;
    }
}

// Create 3 car objects
let car1 = new Car("Toyota", "Prius", 2008, "Blue");
let car2 = new Car("Honda", "Civic", 2021, "Red");
let car3 = new Car("Ford", "Tranzit", 2015, "Black");

// Test the attributes and methods on each car object
console.log("Car 1 Info:", car1.getInfo());  // Output car1's info
console.log(car1.startEngine());             // Start engine for car1

console.log("\nCar 2 Info:", car2.getInfo());  // Output car2's info
console.log(car2.startEngine());             // Start engine for car2

console.log("\nCar 3 Info:", car3.getInfo());  // Output car3's info
console.log(car3.startEngine());             // Start engine for car3
