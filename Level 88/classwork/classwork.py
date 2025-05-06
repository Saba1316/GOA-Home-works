# Understanding the Code

def whatday(num):
    weekdays = {
        "1": "Sunday",
        "2": "Monday",
        "3": "Tuesday",
        "4": "Wednesday",
        "5": "Thursday",
        "6": "Friday",
        "7": "Saturday"
    }

    if num in range(1, 8):
        return weekdays[f"{num}"]
    else:
        return "Wrong, please enter a number between 1 and 7"

# print(whatday(5))

# Breaking it Down
# Dictionary Creation
# A dictionary named weekdays is defined, where keys are strings ("1", "2", etc.), and the values are the corresponding weekday names.
# Checking the Range
# The function checks if num is within the range 1 to 7 (inclusive) using:
# if num in range(1, 8):
# range(1, 8) generates numbers from 1 to 7 (inclusive).
# String Key Issue
# Inside the if condition, the function tries to access weekdays[f"{num}"].
# num is an integer, but dictionary keys are strings.
# The formatted string f"{num}" converts the integer to a string, making the key lookup successful.
# Function Call whatday(5)
# num = 5
# Since 5 is in range(1, 8), the function executes:
# return weekdays[f"{5}"]
# This retrieves weekdays["5"], which is "Thursday".
# Final Answer
#  The correct output is "Thursday".
# Why Other Answers Are Incorrect
# "Error" (Incorrect)
# No error occurs because f"{num}" correctly converts num to a string before dictionary lookup.
# "Friday" (Incorrect)
# weekdays["6"] corresponds to "Friday", but num = 5, so "Thursday" is returned instead.
# "Wrong, please enter a number between 1 and 7" (Incorrect)
# This message is only returned if num is not in the range 1-7, but 5 is valid.
# Thus, the correct choice is "Thursday" .