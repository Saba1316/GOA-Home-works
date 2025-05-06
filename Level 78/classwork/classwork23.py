# Codewars 7 kyu: Sum of numbers from 0 to N

def show_sequence(n):
    if n == 0:
        return "0=0"
    elif n < 0:
        return str(n) + "<0"
    else:
        counter = sum(range(n+1))
        return '+'.join(map(str, range(n+1))) + " = " + str(counter)