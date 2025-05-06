// Create a Car constructor function with 3 attributes and create 3 objects from it.

// Car constructor function
function Car(brand, model, year) {
    this.brand = brand;    // Attribute: Brand of the car
    this.model = model;    // Attribute: Model of the car
    this.year = year;      // Attribute: Year of manufacturing
  }
  
  // Create 3 different car objects using the constructor
  const car1 = new Car('Toyota', 'Corolla', 2020);
  const car2 = new Car('Honda', 'Civic', 2022);
  const car3 = new Car('Ford', 'Mustang', 2021);
  
  // Output the car objects
  console.log(car1);
  console.log(car2);
  console.log(car3);
  