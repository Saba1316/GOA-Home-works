# Codewars 6 kyu: More Zeros than Ones

def more_zeros(s):
    results = []  # List to store characters that meet the condition

    for letter in s:
        # Convert the character to its ASCII value using ord(),
        # then convert that to binary using bin(), and remove the '0b' prefix with [2:]
        function_rep = bin(ord(letter))[2:]

        # Count the number of '0's and '1's in the binary representation
        # If the number of '0's is greater than the number of '1's,
        # and the character hasn't already been added to the results list
        if (function_rep.count("0") > function_rep.count("1")) and (letter not in results):
            results.append(letter)  # Add the character to results

    return results  # Return the final list of characters