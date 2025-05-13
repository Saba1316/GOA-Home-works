# Codewars 7 kyu: Easy Line

def easyline(n):
    return easyline(n-1)*(4*n-2)//n if n else 1