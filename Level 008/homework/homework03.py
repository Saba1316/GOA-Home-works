# Task 3: Create 2 variables: num1 and num2. Get their values ​​from user and compare whether num1 is greater than num2, whether num1 is less than num2, and whether num1 is equal to num2.

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

# Now let's compare them

if num1 < num2:
    print(str(num1) + " is less than " + str(num2))
elif num1 > num2:
    print(str(num1) + " is greater than " + str(num2))
else:
    print(str(num1) + " is equal to " + str(num2))

# The end of task 3