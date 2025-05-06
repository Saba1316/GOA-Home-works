# Analyzing the code

def persistence(n):
    count = 0
    while len(str(n)) != 1:  # Continue until n has only one digit
        x = 1
        for i in str(n):  # Iterate through digits of n
            n = x * int(i)  # Multiply digits together
            x = n  # Update x
        count += 1  # Increase count of iterations
    return count

print(persistence(25))


# Step-by-Step Execution
# Step 1: n = 25
# Convert 25 to string → "25"

# Multiply digits: 2 * 5 = 10

# n = 10

# count = 1

# Step 2: n = 10
# Convert 10 to string → "10"

# Multiply digits: 1 * 0 = 0

# n = 0

# count = 2

# Step 3: n = 0
# Since n is now a single digit (0), exit the loop.

# Final Output
# 2 (Correct Answer)