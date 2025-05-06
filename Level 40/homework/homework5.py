# Use `map()` to calculate the square root of numbers from a given list.



def calculate_square_roots(numbers):
    return list(map(lambda x: x ** 0.5, numbers))


numbers_list = [1, 4, 9, 16, 25]
result = calculate_square_roots(numbers_list)
print(result)  