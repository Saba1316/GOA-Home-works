# Analyzing the code

def group_by_commas(n):
    count = 0
    res = ""
    if len(str(n)) <= 3:
        return str(n)
    else:
        for i in str(n)[::-1]:  # Reverse iterate through the number
            count += 1
            res += i
            if count % 3 == 0:
                res += ","
        result = str(res)[::-1]  # Reverse the string back to normal
        if result[0] == ",":
            return result[1:]  # Remove leading comma if present
        else:
            return result

print(group_by_commas(1000000))

# Step-by-Step Execution
# Input: 1000000

# Convert n to a string → "1000000"

# Reverse Iteration & Grouping by Commas:

# "0" → res = "0"

# "0" → res = "00"

# "0" → res = "000," (Comma added after 3 digits)

# "0" → res = "000,0"

# "0" → res = "000,00"

# "1" → res = "000,000," (Another comma added)

# Reversing Back: ",000,000" → "1,000,000"

# Final Check: Since the first character is not a comma, return "1,000,000".

# Final Output
# "1,000,000" (Correct Answer)