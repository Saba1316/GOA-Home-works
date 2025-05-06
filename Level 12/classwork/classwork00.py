# Task 0: Write the if-else condition code: if the age entered by the user is less than 13, print "You are kid", if it is greater than 13 and less than 20, print "You are teenager", if it is greater than 20, print "You are grown up"

age = int(input("Enter your age: "))

if age < 13:
    print("You are kid")
elif age > 13 and age < 20:
    print("You are teenager")
else:
    print("You are grown up")

# The end of task 0