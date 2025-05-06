# Create an example of multilevel inheritance on animals, using classes: Animal, Prey, Predator, Rabbit, Hawk

# Base class Animal
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def move(self):
        print(f"{self.name} the {self.species} is moving.")

    def sound(self):
        print(f"{self.name} makes a sound.")

# Prey class inherits from Animal
class Prey(Animal):
    def __init__(self, name, species, speed):
        super().__init__(name, species)
        self.speed = speed  # Prey typically have speed to escape predators

    def flee(self):
        print(f"{self.name} the {self.species} is fleeing at a speed of {self.speed} km/h.")

# Predator class inherits from Animal
class Predator(Animal):
    def __init__(self, name, species, hunting_skill):
        super().__init__(name, species)
        self.hunting_skill = hunting_skill  # Predators have a skill to catch prey

    def hunt(self):
        print(f"{self.name} the {self.species} is hunting with skill level {self.hunting_skill}.")

# Rabbit class inherits from Prey
class Rabbit(Prey):
    def __init__(self, name):
        super().__init__(name, "Rabbit", speed=50)

    def sound(self):
        print(f"{self.name} the Rabbit says: 'Squeak!'")

# Hawk class inherits from Predator
class Hawk(Predator):
    def __init__(self, name):
        super().__init__(name, "Hawk", hunting_skill=8)

    def sound(self):
        print(f"{self.name} the Hawk says: 'Screech!'")

# Demonstration of multilevel inheritance

# Create instances
rabbit = Rabbit("Bunny")
hawk = Hawk("Shadow")

# Animal methods
rabbit.move()  # Inherited from Animal
rabbit.sound()  # Overridden in Rabbit
rabbit.flee()  # Inherited from Prey

hawk.move()  # Inherited from Animal
hawk.sound()  # Overridden in Hawk
hawk.hunt()  # Inherited from Predator
