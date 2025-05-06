# Task 5: Create a function that takes the age as an argument, if the age is greater than or equal to 18 it will return that it did not receive the discount, 
# otherwise it will return that it received the discount.

def discount(age):
    if age >= 18:
        print("You can't get discount")
    else:
        print("You can get discount")

        
discount(20)