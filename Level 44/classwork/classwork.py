def duplicate_encode(word):
    return "".join(["(" if word.lower().count(l)==1 else ")" for l in word.lower()])

# Convert to Lowercase: word.lower() converts the entire input string to lowercase. This ensures that the function is case-insensitive when counting character occurrences.

# List Comprehension: The main operation is done using a list comprehension:

# ["(" if word.lower().count(l) == 1 else ")" for l in word.lower()]
# This iterates over each character l in the lowercase version of word.
# For each character, it checks how many times that character appears in the string using word.lower().count(l).
# If the count is 1, it appends "(" to the result list; otherwise, it appends ")".
# Join the List: The join method is used to concatenate all the elements of the list into a single string:

# "".join([...])

# The resulting output would be ")())())".

# This function effectively encodes the character occurrences in a visually distinguishable way.