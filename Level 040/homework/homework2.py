# Use `map()` to multiply all numbers in a list by 5 and return the updated list.

def multiply_by_five(numbers):
    return list(map(lambda x: x * 5, numbers))


numbers = [1, 2, 3, 4, 5]
result = multiply_by_five(numbers)
print(result)  