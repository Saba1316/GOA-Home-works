# Create a car class, give it 4 attributes and create 2 functions in the class. Create 3 objects from this class and test all attribute output and methods on all three.

class Car:
    
    def __init__(self, make, model, year, color):
        self.make = make  
        self.model = model  
        self.year = year  
        self.color = color  

    
    def display_details(self):
        return f"{self.year} {self.make} {self.model} ({self.color})"

    
    def start_engine(self):
        return f"The {self.make} {self.model} engine is now running."


car1 = Car("Toyota", "Corolla", 2020, "Red")
car2 = Car("Ford", "Mustang", 2022, "Blue")
car3 = Car("Tesla", "Model S", 2023, "Black")


print(f"Car 1 Details: {car1.display_details()}")
print(car1.start_engine())


print(f"Car 2 Details: {car2.display_details()}")
print(car2.start_engine())


print(f"Car 3 Details: {car3.display_details()}")
print(car3.start_engine())
