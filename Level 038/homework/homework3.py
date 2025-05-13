# Filter exercises:

# 1. Use a filter to remove only even numbers from a list of integers.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

odd_numbers = list(filter(lambda x: x % 2 != 0, numbers))

print(odd_numbers)

# 2. Use a filter to return only words that start with the letter 'A' (non-sensitive)

words = ["Apple", "banana", "Apricot", "cherry", "avocado", "date"]

a_words = list(filter(lambda word: word.lower().startswith('a'), words))

print(a_words)

# 3. Use filter to remove all negative numbers from the list.

numbers = [10, -5, 3, -1, 7, -2, 0, 4]

non_negative_numbers = list(filter(lambda x: x >= 0, numbers))

print(non_negative_numbers)