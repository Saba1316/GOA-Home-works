# Codewars 7 kyu: For the sake of argument

def numbers(*args):
    return all(type(n) in (int, float) for n in args)