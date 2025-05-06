# Explain this code

def alphabet_position(text):
    positions = []
    for char in text:
        if char.isalpha():
            position = ord(char.lower()) - ord('a') + 1
            positions.append(str(position))
    
    return ' '.join(positions)

# Function Definition:

# The function alphabet_position takes a string text as input.
# List Initialization:

# An empty list positions is created to store the alphabet positions.
# Iterating Over Characters:

# A for loop goes through each character in the input string.
# char.isalpha() checks if the character is a letter.
# Calculating Position:

# If it is a letter, its position is calculated using ord(char.lower()) - ord('a') + 1, where ord() returns the ASCII value of the character.
# Appending Positions:

# The position (converted to a string) is appended to the positions list.
# Joining and Returning:

# Finally, the list of positions is joined into a single string with spaces and returned.