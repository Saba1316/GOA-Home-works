# Create a person class, give it 3 attributes and create 2 functions in the class.  Create several objects from this class and test all attribute output and methods on the first two. 
# Also create an additional class variable that counts how many people there are in total.


class Person:
    
    total_people = 0

    def __init__(self, name, age, profession):
        
        self.name = name
        self.age = age
        self.profession = profession
        Person.total_people += 1
    def display_details(self):
        return f"Name: {self.name}, Age: {self.age}, Profession: {self.profession}"
    def greet(self):
        return f"Hello, my name is {self.name} and I am a {self.profession}."


person1 = Person("Saba", 15, "Student")
person2 = Person("Sesili", 8, "Student")
person3 = Person("Giorgi", 42, "Police Oficer")


print(f"Person 1 Details: {person1.display_details()}")
print(person1.greet())
print(f"Person 2 Details: {person2.display_details()}")
print(person2.greet())
print(f"Total number of people: {Person.total_people}")