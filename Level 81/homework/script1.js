// Create 1 parent class and 3 child classes

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }

    describe() {
        console.log(`${this.name} is a ${this.species}.`);
    }
}


class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Dog'); // Call the parent class constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }

    fetch() {
        console.log(`${this.name} is fetching the ball!`);
    }
}


class Bird extends Animal {
    constructor(name, wingSpan) {
        super(name, 'Bird'); // Call the parent class constructor
        this.wingSpan = wingSpan;
    }

    speak() {
        console.log(`${this.name} chirps.`);
    }

    fly() {
        console.log(`${this.name} is flying.`);
    }
}


class Cat extends Animal {
    constructor(name, color) {
        super(name, 'Cat'); // Call the parent class constructor
        this.color = color;
    }

    speak() {
        console.log(`${this.name} meows.`);
    }

    scratch() {
        console.log(`${this.name} is scratching.`);
    }
}
