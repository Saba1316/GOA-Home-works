# Codewars 7 kyu: 
# Reverse a Number

def reverse_number(n):
    sign = -1 if n < 0 else 1
    return int(str(abs(n))[::-1]) * sign