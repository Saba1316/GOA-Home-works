# Understanding the code

def alphanumeric(password):
    letters = "abcdefghijklmnopqrstuvwxyz0123456789"

    if password.strip() == "":
        return False
    else:
        for i in password:
            if i.lower() in letters:
                is_valid = True
            else:
                is_valid = False
                break
        return is_valid

print(alphanumeric("PassW0rd1241PasSw0rd12"))


# Step-by-Step Execution
# Allowed Characters:
# The variable letters contains lowercase English letters (a-z) and digits (0-9).
# Empty String Check:
# If the password is empty or only contains whitespace, the function returns False.
# "PassW0rd1241PasSw0rd12" is not empty, so we proceed.
# Character Validation:
# The function iterates over each character in password.
# i.lower() converts each character to lowercase and checks if it's in letters.
# Key Observations:
# The input string "PassW0rd1241PasSw0rd12" consists of:
# Letters: P, a, s, s, W, r, d, P, a, s, S, w, r, d
# Digits: 0, 1, 2, 4, 1, 0, 1, 2
# Since all characters (after converting letters to lowercase) exist in letters, no invalid character is encountered.
# Final Value of is_valid:
# If all characters are valid, the loop completes without hitting the break statement.
# The last value assigned to is_valid remains True, which is then returned.
# Final Output
# True
# The correct answer is marked correctly in the image (True).