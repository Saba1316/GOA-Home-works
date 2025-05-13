# Understanding the Code

def distinct(seq):
    listn = []
    for i in seq:
        if i in listn:
            pass
        else:
            listn.append(i)
    return listn

print(distinct([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 7, 7]))


# Breaking it Down
# Function Definition
# The function distinct(seq) initializes an empty list listn to store unique elements.
# It iterates over seq, checking if i is already in listn:
# If i is already in listn, it does nothing (pass).
# Otherwise, i is added to listn.
# Input List
# [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 7, 7]
# The function removes duplicates while maintaining order.
# Step-by-Step Execution
# i = 1 → listn = [1]
# i = 2 → listn = [1, 2]
# i = 2 (duplicate) → ignored
# i = 3 → listn = [1, 2, 3]
# i = 3 (duplicate) → ignored
# i = 3 (duplicate) → ignored
# i = 4 → listn = [1, 2, 3, 4]
# i = 4 (duplicate) → ignored
# i = 5 → listn = [1, 2, 3, 4, 5]
# i = 5 (duplicate) → ignored
# i = 6 → listn = [1, 2, 3, 4, 5, 6]
# i = 7 → listn = [1, 2, 3, 4, 5, 6, 7]
# i = 7 (duplicate) → ignored
# Final Output
# [1, 2, 3, 4, 5, 6, 7]
# Correct Answer
# [1, 2, 3, 4, 5, 6, 7]