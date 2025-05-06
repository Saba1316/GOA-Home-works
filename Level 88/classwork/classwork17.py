# Codewars 7 kyu: Make a square box!

def box(n):
    return ['-' * n] + ['-' + ' ' * (n-2) + '-'] * (n-2) + ['-' * n]