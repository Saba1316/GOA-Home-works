class Person:
    def __init__(self, name, age):
        self._name = name  # _name is protected (internal use)
        self._age = age    # _age is protected

    def _increment_age(self):
        """An internal method to increment the age."""
        self._age += 1

    def display_info(self):
        """Public method to display the person's information."""
        print(f"Name: {self._name}, Age: {self._age}")


# Usage:
person = Person("Alice", 30)
person.display_info()  # Name: Alice, Age: 30

# Accessing the protected attribute directly is discouraged, but possible
print(person._name)  # Output: Alice
person._increment_age()  # Internal method call
person.display_info()  # Name: Alice, Age: 31



class Person:
    def __init__(self, name, age):
        self.__name = name  # __name is private (name mangling)
        self.__age = age    # __age is private

    def __increment_age(self):
        """A private method to increment the age."""
        self.__age += 1

    def display_info(self):
        """Public method to display the person's information."""
        print(f"Name: {self.__name}, Age: {self.__age}")


# Usage:
person = Person("Alice", 30)
person.display_info()  # Name: Alice, Age: 30

# Accessing the private attribute directly will raise an error
try:
    print(person.__name)  # This will raise an AttributeError
except AttributeError as e:
    print(e)  # Output: 'Person' object has no attribute '__name'

# Accessing the private method will raise an error
try:
    person.__increment_age()  # This will raise an AttributeError
except AttributeError as e:
    print(e)  # Output: 'Person' object has no attribute '__increment_age'

# Name mangling can be used to access the private attribute, but it's discouraged
print(person._Person__name)  # Output: Alice
person._Person__increment_age()  # This works, but is strongly discouraged
person.display_info()  # Name: Alice, Age: 31
