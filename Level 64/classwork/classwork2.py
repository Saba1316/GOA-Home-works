# Explain the difference between classmethod and staticmethod.


# In Python, both classmethod and staticmethod are used to define methods that 
# don't operate on an instance of the class in the usual way. However, they differ significantly in terms of what they can access and how they are used.

# classmethod:

# Takes cls as the first argument.
# Used for operations that affect the class as a whole or when you need to access class-level data.
# Typically used for factory methods or alternative constructors.
# staticmethod:

# Does not take self or cls as the first argument.
# Used for utility functions that don’t need to access or modify the instance or class data.
# Typically used for helper functions that are logically related to the class but don't depend on its state.