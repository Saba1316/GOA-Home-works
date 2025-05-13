# Make an example of inheritance on animals (3 child classes)



class Animal:
    def __init__(self, name, age):
        self.name = name  
        self.age = age    
    
    def speak(self):
        return f"{self.name} makes a sound."
    
    def info(self):
        return f"{self.name} is {self.age} years old."



class Cow(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age)  
        self.breed = breed  
    
    def speak(self):
        return f"{self.name} Moans!"
    
    def info(self):
        return f"{self.name} is a {self.breed} and is {self.age} years old."



class Horse(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age)  
        self.color = color  
    
    def speak(self):
        return f"{self.name} mehehehe!"
    
    def info(self):
        return f"{self.name} is a {self.color} cat and is {self.age} years old."



class Bird(Animal):
    def __init__(self, name, age, species):
        super().__init__(name, age)  
        self.species = species  
    
    def speak(self):
        return f"{self.name} chirps!"
    
    def info(self):
        return f"{self.name} is a {self.species} and is {self.age} years old."



dog = Cow("Buddy", 4, "Golden Retriever")
cat = Horse("Whiskers", 2, "Tabby")
bird = Bird("Tweety", 1, "Canary")


print(dog.info())  
print(dog.speak())  
print(cat.info())  
print(cat.speak())  
print(bird.info())  
print(bird.speak())  