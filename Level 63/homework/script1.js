// Create constructors for computer, keyboard and bus

function Computer(brand, model, processor, ram, storage) {
    this.brand = brand;
    this.model = model;
    this.processor = processor;
    this.ram = ram;
    this.storage = storage;
  
    // მეთოდი კომპიუტერის ინფო შთაბეჭდილებისთვის
    this.getInfo = function() {
      return `${this.brand} ${this.model} with ${this.processor} processor, ${this.ram} GB RAM, and ${this.storage} GB storage.`;
    };
  }
  
  // კომპიუტერის შექმნა
  const myComputer = new Computer('Apple', 'MacBook Pro', 'Intel i9', 16, 512);
  console.log(myComputer.getInfo()); // Output: Apple MacBook Pro with Intel i9 processor, 16 GB RAM, and 512 GB storage.

  
  function Keyboard(brand, type, isWireless, color) {
    this.brand = brand;
    this.type = type; // როგორიცაა 'mechanical' ან 'membrane'
    this.isWireless = isWireless;
    this.color = color;
  
    // მეთოდი კლავიატურის შესახებ ინფორმაციის მისაღებად
    this.getDescription = function() {
      return `${this.brand} keyboard, ${this.type} type, ${this.isWireless ? 'Wireless' : 'Wired'}, Color: ${this.color}.`;
    };
  }
  
  // კლავიატურის შექმნა
  const myKeyboard = new Keyboard('Logitech', 'mechanical', true, 'black');
  console.log(myKeyboard.getDescription()); // Output: Logitech keyboard, mechanical type, Wireless, Color: black.

  
  function Bus(brand, model, passengerCapacity, fuelType) {
    this.brand = brand;
    this.model = model;
    this.passengerCapacity = passengerCapacity;
    this.fuelType = fuelType;
  
    // მეთოდი ავტობუსის დეტალების მოსაწოდებლად
    this.getDetails = function() {
      return `${this.brand} ${this.model} bus with a capacity of ${this.passengerCapacity} passengers, using ${this.fuelType} fuel.`;
    };
  }
  
  // ავტობუსის შექმნა
  const cityBus = new Bus('Mercedes-Benz', 'Sprinter', 20, 'diesel');
  console.log(cityBus.getDetails()); // Output: Mercedes-Benz Sprinter bus with a capacity of 20 passengers, using diesel fuel.
  