# Make an example of multilevel inheritance


class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        print(f"{self.name} makes a sound.")


class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  
        self.breed = breed
    
    def speak(self):
        print(f"{self.name} barks.")


class Puppy(Dog):
    def __init__(self, name, breed, age):
        super().__init__(name, breed)  
        self.age = age
    
    def speak(self):
        print(f"{self.name} is a {self.age}-month-old puppy and barks excitedly!")


animal = Animal("Generic Animal")
animal.speak()

dog = Dog("Buddy", "Golden Retriever")
dog.speak()

puppy = Puppy("Charlie", "Labrador", 6)
puppy.speak()
