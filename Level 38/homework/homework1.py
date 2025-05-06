# Lambda exercises

# 1. Create a lambda function that sorts a list of tuples by the second element of each tuple.

data = [(1, 3), (2, 1), (4, 2), (3, 4)]

sorted_data = sorted(data, key=lambda x: x[1])

print(sorted_data)

# 2. Create a lambda function that calculates the squares of numbers given a list.

numbers = [1, 2, 3, 4, 5]

squared_numbers = list(map(lambda x: x ** 2, numbers))

print(squared_numbers)

# 3. Use the lambda function to filter out words that are less than 4 characters long.

words = ["apple", "is", "banana", "cat", "dog", "elephant", "hi"]

filtered_words = list(filter(lambda word: len(word) >= 4, words))

print(filtered_words)