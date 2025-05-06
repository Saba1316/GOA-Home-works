# Task 4: Play with these two loops, do 5 for loop examples and 5 while loop examples (something you haven't done before).

# First let's start with for loops

# 1) Write a for loop that calculates and prints the sum of all odd numbers from 10 to 20(excluding).

num_sum = 0

for num in range(11, 20, 2):
    num_sum += num
print(num_sum)

# 2) Write a for loop that prints the square of each number from 1 to 5(including).

for num in range(1, 6):
    print(num * num)

# 3) Write a for loop that prints each character in the string "Hello".

for char in "Hello":
    print(char)

# 4) Write a for loop that prints the multiples of 5 from 50 to 100(including).

for num in range(50, 101, 5):
    print(num)

# 5) Write a for loop that prints if number is even or odd from 50 to 100(including).

for num in range(50, 101):
    if num % 2 == 0:
        print(str(num) + " is even")
    else:
        print(str(num) + " is odd")