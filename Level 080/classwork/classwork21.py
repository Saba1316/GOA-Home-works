# Codewars 7 kyu: Leonardo numbers

def L(n, a,b,inc):
    lst = []
    for _ in range(n): 
        lst.append(a)
        a,b = b,a+b+inc
    return lst