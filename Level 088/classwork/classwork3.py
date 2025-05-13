# Understanding the code

def to_alternating_case(string):
    res = ""

    for i in string:
        if i.islower():
            res += i.upper()
        else:
            res += i.lower()

    return res

# print(to_alternating_case("altERnaTIng cASe"))


# Breaking it Down
# Function Definition
# The function to_alternating_case(string) takes a string as input.
# It initializes an empty string res to store the result.
# It loops through each character in the input string.
# If the character is lowercase, it converts it to uppercase.
# If the character is uppercase, it converts it to lowercase.
# The modified character is appended to res.
# Finally, the function returns the transformed string.
# Processing the Input "altERnaTIng cASe"
# 'a' → 'A'
# 'l' → 'L'
# 't' → 'T'
# 'E' → 'e'
# 'R' → 'r'
# 'n' → 'N'
# 'a' → 'A'
# 'T' → 't'
# 'I' → 'i'
# 'n' → 'N'
# 'g' → 'G'
# ' ' (space remains the same)
# 'c' → 'C'
# 'A' → 'a'
# 'S' → 's'
# 'e' → 'E'
# Final Output
# "ALTerNAtiNG CaSe"
# Correct Answer
# "ALTerNAtiNG CaSe" (highlighted in yellow)