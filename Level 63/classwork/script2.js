// Create a Person constructor function with 4 attributes and create 3 objects from it.

// Person constructor function
function Person(name, age, occupation, city) {
    this.name = name;       // Attribute: Name of the person
    this.age = age;         // Attribute: Age of the person
    this.occupation = occupation;  // Attribute: Occupation of the person
    this.city = city;       // Attribute: City where the person lives
  }
  
  // Create 3 different person objects using the constructor
  const person1 = new Person('Saba', 15, 'Student', 'Tbilisi');
  const person2 = new Person('Bob', 25, 'Designer', 'Los Angeles');
  const person3 = new Person('Charlie', 35, 'Teacher', 'Chicago');
  
  // Output the person objects
  console.log(person1);
  console.log(person2);
  console.log(person3);
  