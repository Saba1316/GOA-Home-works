# Codewars 7 kyu: Simple Fun #13: Magical Well

def magical_well(a, b, n):
    return sum((a + i) * (b + i) for i in range(n))