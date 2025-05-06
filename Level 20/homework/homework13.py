# Task 13: Create a function that prompts the user for a number and prints that number if it is divisible by 3 or 5 or both.

def input(number):
    if number % 3 == 0: 
        print("The number is divisible by three")
    else:
        print("The number is not divisible by three")
    if number % 5 == 0:
        print("The number is divisible by five")
    else:
        print("The number is not divisible by five")
    if number % 3 == 0 and number % 5 == 0:
        print("The number is divisible by both of them")
    else:
        print("The number is not divisible by both of them")
        

print(input(15))