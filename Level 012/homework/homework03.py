# Task 3: Use a while loop and make a game similar to the second task again. 
# The numbers will be from 1 to 10 (including), and until the user enters the correct number, write that it is wrong, if he enters it correctly, write that it is correct.

correct_num = 7
user_guess = int(input("Guess the number (From 1 to 10): "))

while user_guess != correct_num:
    print("Your guess is wrong")
    user_guess = int(input("Try again: "))
print("Your guess is correct")

# The end of task 3: