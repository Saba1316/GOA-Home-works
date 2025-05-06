# Analyzing the code

def dir_reduc(arr):
    opp = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "EAST": "WEST",
        "WEST": "EAST"
    }

    for i in range(len(arr) - 1):
        if arr[i + 1] == opp[arr[i]]:
            del arr[i], arr[i]
            return dir_reduc(arr)

    return arr

print(dir_reduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))

# This function simplifies a list of directional movements by removing consecutive opposite directions.

# Step 1: Opposite Direction Mapping
# opp = {
#     "NORTH": "SOUTH",
#     "SOUTH": "NORTH",
#     "EAST": "WEST",
#     "WEST": "EAST"
# }
# This dictionary defines opposite directions:
# NORTH ↔ SOUTH
# EAST ↔ WEST
# Step 2: Iterative Reduction
# for i in range(len(arr) - 1):
#     if arr[i + 1] == opp[arr[i]]:
#         del arr[i], arr[i]
#         return dir_reduc(arr)
# The loop iterates through the list, checking if two consecutive elements are opposites.
# If found, both are removed using del arr[i], arr[i].
# The function then recursively calls itself to continue reducing the list.
# Step 3: Base Case
# return arr
# Once no further reductions are possible, the function returns the simplified list.
# Processing the Input
# print(dir_reduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
# Initial list: ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
# First Iteration
# "NORTH" and "SOUTH" are opposites → Remove them.
# New list: ["SOUTH", "EAST", "WEST", "NORTH", "WEST"]
# Second Iteration
# "EAST" and "WEST" are opposites → Remove them.
# New list: ["SOUTH", "NORTH", "WEST"]
# Third Iteration
# "SOUTH" and "NORTH" are opposites → Remove them.
# New list: ["WEST"]
# Final Output
# The only remaining direction is ["WEST"].
# Answer in the Quiz
# From the options given in the image, the correct answer is: ✅ ["WEST"]