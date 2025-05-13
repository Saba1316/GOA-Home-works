# Codewars 7 kyu: Naughty number

def naughty_number(arr):
    return next(i for i, x in enumerate(arr) if any(str.isdigit(c) for c in str(x)))