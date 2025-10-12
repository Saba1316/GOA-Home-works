# Codewars 6 kyu: Unique In Order.

def unique_in_order(seq):
    result = []
    prev = " "
    for char in seq:
        if char != prev:
            result.append(char)
            prev = char
    return result