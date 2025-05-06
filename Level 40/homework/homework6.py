# Use `map()` to create a list of booleans indicating if numbers in a given list are even or odd.

def are_numbers_even(numbers):
    return list(map(lambda x: x % 2 == 0, numbers))


numbers_list = [1, 2, 3, 4, 5, 6]
result = are_numbers_even(numbers_list)
print(result)  