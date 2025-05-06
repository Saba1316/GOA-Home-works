# Create an instance of staticmethod


class Calculator:
    @staticmethod
    def add(x, y):
        return x + y

    @staticmethod
    def multiply(x, y):
        return x * y

# Usage

# 1. Calling static methods directly from the class
result_add = Calculator.add(3, 4)        # Output: 7
result_multiply = Calculator.multiply(3, 4)  # Output: 12

# 2. Creating an instance of the class
calc_instance = Calculator()

# 3. Calling static methods from the instance (not required but possible)
result_add_instance = calc_instance.add(5, 6)  # Output: 11
result_multiply_instance = calc_instance.multiply(5, 6)  # Output: 30

print(result_add)              # 7
print(result_multiply)         # 12
print(result_add_instance)     # 11
print(result_multiply_instance) # 30
