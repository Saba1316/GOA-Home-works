# Write code where there will be an IndexError and handle it with try/except.

sequence = [1, 2, 3, 4, 5]

try:
    index = 10
    value = sequence[index]
    print(f"The value at index {index} is: {value}")
except IndexError:
    print("Error: Index is out of range.")