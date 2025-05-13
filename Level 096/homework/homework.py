# * Is str data type mutable or immutable then how does .replace() method work? We are able to mutate our string eve...
#    The str data type in Python is immutable. This means that once a string is created, its contents cannot be directly changed. 
# When you use the .replace() method, it doesn't modify the original string. Instead, it returns a new string with the specified replacements made. The original string remains unchanged.
#  * Are all collection types matched by their bracket types? list: [], tuple: (), dict: {}, set: {}
#    Yes, the bracket types you've listed are the standard and most common way to define these collection types in Python:
#    * list: [] (square brackets)
#    * tuple: () (parentheses)
#    * dict: {} (curly braces)
#    * set: {} (curly braces). Note that an empty set must be created using set(), as {} alone creates an empty dictionary.
#  * Is sentence "I created function" syntactically correct or not?
#    The sentence "I created function" is not syntactically correct in standard English. It should be "I created a function". 
# The indefinite article "a" is missing before the singular noun "function".
#  * If python is case-sensitive language...
#    Since you haven't finished the sentence, I'll complete it based on what's implied. If Python is a case-sensitive language, 
# it means that myVariable, MyVariable, and myvariable would be treated as three distinct and separate identifiers (variable names). Python is indeed a case-sensitive language.
#  * What will print(True + True) output?
#    In Python, boolean values True and False are treated as integers 1 and 0 respectively in arithmetic operations. Therefore, 
# True + True is equivalent to 1 + 1, which evaluates to 2.
#    print(True + True)  # Output: 2

#  * What will print(int("1_000_000")) output?
#    Python allows underscores as visual separators in numeric literals for better readability. The int() function correctly parses 
# strings containing these underscores. Therefore, int("1\_000\_000") will convert the string "1_000_000" to the integer 1000000.
#    print(int("1_000_000"))  # Output: 1000000

#  * What will this code output?
#    You haven't provided any code for question 8. Please provide the code snippet so I can tell you its output.
#  * Is empty list Truthy or Falsy value?
#    An empty list ([]) in Python is considered a Falsy value in a boolean context. This means when used in a conditional statement, it will evaluate to False.
#    my_list = []
# if not my_list:
#     print("The list is empty (Falsy)")  # This will be printed

#  * What will this code output?
#    You haven't provided any code for question 10. Please provide the code snippet so I can tell you its output.
#  * Can we create list comprehension with if statement?
#    Yes, you can definitely create list comprehensions with an if statement to conditionally include elements in the new list. The syntax typically looks like this:
#    new_list = [expression for item in iterable if condition]

#    For example, to create a list of even numbers from a range:
#    even_numbers = [x for x in range(10) if x % 2 == 0]
# print(even_numbers)  # Output: [0, 2, 4, 6, 8]

#  * Can we create list comprehension with if-else statement?
#    Yes, you can also use an if-else statement within a list comprehension, but the syntax is slightly different. The if-else block comes before the for loop:
#    new_list = [expression_if_true if condition else expression_if_false for item in iterable]

#    For example, to classify numbers as even or odd:
#    even_odd = ["even" if x % 2 == 0 else "odd" for x in range(5)]
# print(even_odd)  # Output: ['even', 'odd', 'even', 'odd', 'even']

#  * Can you define function inside function?
#    Yes, Python allows you to define a function inside another function. This is known as a nested function or an inner function. 
# Inner functions have access to the variables in the enclosing (outer) function's scope.
#    def outer_function(x):
#     def inner_function(y):
#         return x + y
#     return inner_function

# closure = outer_function(10)
# result = closure(5)
# print(result)  # Output: 15

#  * Is there error type called "ZeroDivisionError"?
#    Yes, there is a built-in exception in Python called ZeroDivisionError. 
# This error is raised when you attempt to perform a division or modulo operation with zero as the divisor.
#    try:
#     result = 10 / 0
# except ZeroDivisionError:
#     print("Error: Cannot divide by zero!")

#  * What are lambda functions called?
#    Lambda functions in Python are also known as anonymous functions. 
# This is because they are not defined using the standard def keyword and do not have a formal name. They are typically used for small, one-off 
# functions where a formal function definition might seem overly verbose.
#  * What will print(not "") output?
#    In Python, an empty string ("") is considered a Falsy value. The not operator negates the boolean value of its operand. Therefore, not "" evaluates to not False, which is True.
#    print(not "")  # Output: True

#  * If someone said "Everything is an Object in python", would it be a lie?
#    No, if someone said "Everything is an Object in Python", they would be speaking the truth. 
# In Python, almost every entity is treated as an object. This includes basic data types (like integers, floats, strings, booleans), 
# collections (like lists, tuples, dictionaries, sets), functions, modules, and even classes themselves. They all have attributes and methods associated with them.
#  * Are "is" and "==" operators both exactly the same in python?
#    No, the is and == operators in Python are not exactly the same. They serve different purposes:
#    * == (equality operator): Checks if the values of two operands are equal.
#    * is (identity operator): Checks if two operands refer to the same object in memory.
#    Two variables can have the same value but refer to different objects. In such cases, == would return True, while is would return False.
#    list1 = [1, 2, 3]
# list2 = [1, 2, 3]

# print(list1 == list2)  # Output: True (values are the same)
# print(list1 is list2)  # Output: False (they are different objects in memory)

# list3 = list1
# print(list1 is list3)  # Output: True (list3 now refers to the same object as list1)

#  * Is python high level or low level programming language?
# #    Python is a high-level programming language. This means that its syntax is closer to 
# human language and it abstracts away many of the low-level details of computer hardware (like memory management). T
# his makes it easier for programmers to write and understand code compared to low-level languages like assembly language.