# Map exesrcises:

# 1. Use map with the lambda function to convert all strings in the list to uppercase.

words = ["apple", "banana", "cherry", "date"]

uppercase_words = list(map(lambda word: word.upper(), words))

print(uppercase_words)

# 2. Use map with a lambda function to add 5 to each number in the list.

numbers = [1, 2, 3, 4, 5]

updated_numbers = list(map(lambda x: x + 5, numbers))

print(updated_numbers)

# 3. Use map to add the first letter of each word with "-start".

words = ["apple", "banana", "cherry", "date"]

modified_words = list(map(lambda word: word[0] + "-start", words))

print(modified_words)