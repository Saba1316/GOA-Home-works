# Task 11: Create a while loop that counts the numbers from 1 to 100 but skips the numbers from 50 to 60 (excluding).

num = 1

while num < 100:
    if num == 50:
        num += 10
    else:
        print(num)
        num += 1