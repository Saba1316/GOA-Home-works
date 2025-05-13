# In general, talk about classmethod and staticmethod, 
# explain what it is used for, when we need it, what is the difference between these three: instance method, static method, class method, etc.


# In Python, there are three types of methods that you can define 
# in a class: instance methods, static methods, and class methods. Each of them serves a different purpose and is used in specific situations. 


# 1. Instance Method
# An instance method is the most common type of method in a class. These methods are used to 
# perform actions related to an instance (object) of the class. They can access and modify the attributes of the instance and also can call other instance methods.

# 2. Static Method
# A static method is a method that does not depend on class or instance data. 
# It doesn’t take a reference to the instance (self) or class (cls) as the first argument. It behaves just like a normal function but belongs to the class’s namespace.

# 3. Class Method
# A class method is a method that takes the class itself as the first argument (usually named cls). It can modify class-level attributes but cannot access instance-level data directly.

# Instance methods are most commonly used for interacting with object data.
# Static methods are used for operations that belong to the class but don’t need access to instance or class-specific data.
# Class methods are useful for dealing with class-level data, creating alternative constructors, or factory patterns.
# Understanding the differences and appropriate use cases for each helps in writing cleaner and more maintainable object-oriented code.