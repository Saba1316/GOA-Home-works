# Task 2: Use a for loop to sum the numbers from 1 to 1000 (excluding) but omit the numbers in the range(500, 600) (i.e. do not add the numbers from five hundred to six hundred).

sum = 0

for num in range(1000):
    if num in range(500, 601):
        pass
    else:
        sum += num

print(sum)

# The end of task 2.