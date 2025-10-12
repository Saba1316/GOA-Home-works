# Codewars 6 kyu: 
# Lucas numbers

def lucasnum(n):
    a, b = 2, 1
    for _ in range(abs(n)):
        a, b = b, a + b
    return -a if n < 0 and n % 2 else a