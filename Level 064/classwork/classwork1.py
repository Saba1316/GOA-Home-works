# Explain the difference between instance method and static method.


# In Python, both instance methods and static methods are ways to define behavior within a class, but they differ in how they interact with the class and its instances.
# An instance method is a method that operates on an instance of the class. It has access to the instance’s attributes and can modify them. 
# Instance methods are the most common type of methods and are the default behavior when you define a method in a class.

# A static method is a method that does not take self or cls as its first argument. It behaves like a regular function but belongs to the class's namespace. 
# Static methods do not have access to the instance (self) or the class (cls) unless explicitly passed. 
# They are used when you want to define a method that is related to the class but does not need access to the instance or class-specific data.