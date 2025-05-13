# Task 0 : Re-do the dice roll game you did in class. Choose any number from 1 to 6 which will be the correct answer. Also take the guess that the user enters. 
# If you guess correctly, write "It's correct", if not "It's incorrect".

num = 4
guess = int(input("Enter your guess (From 1 to 6): "))

if guess == num:
    print("Your guess is right! You won!")
else:
    print("Your guess is not right! You lost!")

# The end of task 0.