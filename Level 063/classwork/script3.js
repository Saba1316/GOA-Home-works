// Create an Animal constructor function with 3 attributes and create 3 objects from it.

// Animal constructor function
function Animal(name, species, age) {
    this.name = name;       // Attribute: Name of the animal
    this.species = species; // Attribute: Species of the animal (e.g., Dog, Cat)
    this.age = age;         // Attribute: Age of the animal
  }
  
  // Create 3 different animal objects using the constructor
  const animal1 = new Animal('Thomas', 'Dog', 5);
  const animal2 = new Animal('Robert', 'Cat', 3);
  const animal3 = new Animal('Simba', 'Lion', 7);
  
  // Output the animal objects
  console.log(animal1);
  console.log(animal2);
  console.log(animal3);
  