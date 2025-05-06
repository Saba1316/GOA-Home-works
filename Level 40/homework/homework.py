# Do it in codewars and in vscode comment the entire solution, i.e. what you did, why you did it and how your written code works

def dirReduc(arr):
    
    opposite = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'
    }
    
    stack = []
    
    for direction in arr:
        if stack and stack[-1] == opposite[direction]:
            stack.pop()
        else:
            stack.append(direction)
    
    return stack

# Understand Opposite Directions:

# NORTH and SOUTH are opposites.
# EAST and WEST are opposites.
# Simplifying Directions:

# If you have both NORTH and SOUTH in the list, they can cancel each other out. The same applies for EAST and WEST.
# Implementation:

# Loop through the list of directions.
# Use a stack (or a similar structure) to manage the current direction.
# When you encounter an opposite direction, pop the last direction off the stack; otherwise, push the current direction onto the stack.