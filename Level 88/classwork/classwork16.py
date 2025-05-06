# Analyzing the code

def rot13(message):
    letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    cap_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
    result = ""

    for i in range(len(message)):
        if message[i].isupper() and message[i].isalpha():
            result += cap_letters[cap_letters.index(message[i]) + 13]
        elif message[i] == " ":
            result += " "
        elif message[i].islower() and message[i].isalpha():
            result += letters[letters.index(message[i]) + 13]
        else:
            result += message[i]

    return result

print(rot13("abc"))


# Step-by-Step Execution
# Input: "abc"

# Processing Each Character:

# 'a' → 'n' (shifted 13 places)

# 'b' → 'o' (shifted 13 places)

# 'c' → 'p' (shifted 13 places)

# Final Output: "mno"

# Correct Answer
# ✅ "mno" (green option)