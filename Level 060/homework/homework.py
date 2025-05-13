# Create a Motorcycle class with 4 attributes and 1 class variable. The class variable should count how many motorcycles were made, the rest is up to you, what the attributes will be, etc.

class Motorcycle:
    total_motorcycles = 0
    
    def __init__(self, model, year, engine_capacity, color):
        self.model = model
        self.year = year
        self.engine_capacity = engine_capacity
        self.color = color
        
        
        Motorcycle.total_motorcycles += 1
    
    def display_info(self):
        
        return f"Model: {self.model}, Year: {self.year}, Engine Capacity: {self.engine_capacity}cc, Color: {self.color}"
    
    