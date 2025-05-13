# Codewars 7 kyu: C is for Codewars

def generate_C(size):
    f1 = ['C' * 5 * size] * size
    f2 = ['C' * size] * 3 * size
    return '\n'.join(f1 + f2 + f1)