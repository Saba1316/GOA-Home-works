// Create 3 different classes

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.started = false;
    }

    start() {
        this.started = true;
        console.log(`The ${this.year} ${this.make} ${this.model} has started.`);
    }

    stop() {
        this.started = false;
        console.log(`The ${this.year} ${this.make} ${this.model} has stopped.`);
    }

    displayInfo() {
        console.log(`Car Info: ${this.year} ${this.make} ${this.model}`);
    }
}


class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    updateAddress(newAddress) {
        this.address = newAddress;
        console.log(`${this.name}'s new address is ${this.address}.`);
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
    }
}


class BankAccount {
    constructor(accountHolder, balance = 0) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${amount} has been deposited. New balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
        } else {
            this.balance -= amount;
            console.log(`${amount} has been withdrawn. New balance: ${this.balance}`);
        }
    }

    checkBalance() {
        console.log(`${this.accountHolder}'s current balance is ${this.balance}`);
    }
}
