# Create an instance of classmethod

class Car:
    total_cars = 0  # Class-level variable to track the total number of cars

    def __init__(self, make, model):
        self.make = make
        self.model = model
        Car.total_cars += 1  # Increment class-level total cars

    @classmethod
    def create_electric_car(cls, make, model):
        # Class method to create an electric car (alternative constructor)
        car = cls(make, model)  # Use the class to create an instance
        print(f"Creating an electric car: {make} {model}")
        return car

    @classmethod
    def get_total_cars(cls):
        # Class method to get the total number of cars created
        return cls.total_cars


# Usage
# 1. Creating an instance using the class method (alternative constructor)
electric_car = Car.create_electric_car("Tesla", "Model S")

# 2. Calling a class method using the instance (not recommended but possible)
print(electric_car.get_total_cars())  # Output: 1 (Total cars created)
