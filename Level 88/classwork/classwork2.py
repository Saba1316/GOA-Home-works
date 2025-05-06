# Understanding the Code

def position(alphabet):
    alphabet1 = "abcdefghijklmnopqrstuvwxyz"

    return f"Position of alphabet: {alphabet1.find(alphabet) + 1}"

print(position("f"))

# Breaking it Down
# Function Definition
# The function position(alphabet) initializes a string alphabet1 containing all lowercase English letters in order.
# It finds the index of the input letter using .find(), which returns the zero-based index of the first occurrence of the character.
# Since we want 1-based indexing, 1 is added to the result.
# Finding "f" in "abcdefghijklmnopqrstuvwxyz"
# alphabet1.find("f") returns 5 (since indexing starts from 0).
# Adding 1 gives 6.
# Final Output
# "Position of alphabet: 6"
# Correct Answer
# 6