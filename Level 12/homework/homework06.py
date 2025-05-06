# Task 6: Take a number from user and print his grade.

# A: 90-100
# B: 80-89
# C: 70-79
# D: 60-69
# F: 0-59

score = int(input("Enter your score: "))

if 90 <= score <= 100:
    print("Your grade is A.")
elif 80 <= score <= 89:
    print("Your grade is B.")
elif 70 <= score <=79:
    print("Your grade is C.")
elif 60 <= score <= 69:
    print("Your grade is D.")
elif 0 <= score <= 59:
    print("Your grade is F.")
else:
    print("Wrong score.")

# The end of task task 6.