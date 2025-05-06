# Task 3 : Continuing task 3

# while loops 

# 1) Write a while loop that calculates and prints the sum of all odd numbers from 10 to 20(excluding).

num = 11
num_sum = 0

while num < 20:
    num_sum += num
    num += 2
print(num_sum)

# 2) Write a while loop that prints the square of each number from 1 to 5(including).


num = 1

while num <= 5:
    print(num * num)
    num += 1


# 3) Write a while loop that prints each character in the string "Hello".

index = 0
string = "Hello"

while index < len(string):
    print(string[index])
    index += 1


# 4) Write a while loop that prints the multiples of 5 from 50 to 100(including).


num = 50
finish = 100
step = 5

while num <= finish:
    print(num)
    num += step


# 5) Write a while loop that prints if number is even or odd from 50 to 100(including).

num = 50
finish = 100

while num <= finish:
    if num % 2 == 0:
        print(str(num) + " is even")
    else:
        print(str(num) + " is odd")
    num += 1
    
# The end of task 3