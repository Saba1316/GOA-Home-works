# Talk about which method to use when

# Choosing between instance methods, class methods, and static methods in Python depends on what kind of operation you want to perform and what data you need to access. 

# Use instance methods when you need to:

# Operate on instance-specific data: You should use instance methods when the method needs access to attributes that are specific to an instance of the class. 
# Instance methods are tied to an individual object, so they can modify or retrieve data stored in that particular instance.
# Manipulate the state of a specific object: Instance methods are designed to interact with or modify the state of an instance, and they have access to instance variables through self.
# Encapsulate behavior related to an instance: When the operation logically belongs to a particular object, instance methods are the most appropriate.


# Use class methods when you need to:

# Access or modify class-level attributes: Class methods are bound to the class, not to an individual instance, so they can access or modify class 
# variables that are shared across all instances.
# If your method needs to operate on data that is shared by all instances of the class, a class method is the right choice.
# Provide alternative constructors: Class methods are commonly used to define alternative ways to create instances of the class, 
# often used in factory methods that use different inputs or initialization logic.
# Work with class-level state or perform actions that affect the entire class: This includes any behavior that needs to know or modify class-level attributes, 
# like maintaining a count of instances or managing class-level settings.


# Use static methods when you need to:

# Define a utility function that does not require access to the instance or class: Static methods 
# don't access or modify instance-specific or class-level data, so they are ideal for functions that are logically related to the class but don't need to interact with its internal state.
# Group methods that logically belong to the class but don't need instance or class-level data: 
# If a function is related to the class conceptually but doesn't interact with its state, make it a static method.

