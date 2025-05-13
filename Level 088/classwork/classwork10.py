# Analyzing the code

def solution(s):
    string = ""
    for i in s:
        if i.isupper():  # If the character is uppercase
            string += " " + i  # Add a space before it
        else:
            string += i  # Append lowercase characters normally
    return string

print(solution("hakunaMatata"))


# Step-by-Step Execution
# Initial string: "hakunaMatata"

# Iterate through each character:

# 'h' → Append → "h"

# 'a' → Append → "ha"

# 'k' → Append → "hak"

# 'u' → Append → "haku"

# 'n' → Append → "hakun"

# 'a' → Append → "hakuna"

# 'M' → Uppercase → Add space before → "hakuna M"

# 'a' → Append → "hakuna Ma"

# 't' → Append → "hakuna Mat"

# 'a' → Append → "hakuna Mata"

# 't' → Append → "hakuna Matat"

# 'a' → Append → "hakuna Matata"

# Final Output
# "hakuna Matata" (Correct Answer)