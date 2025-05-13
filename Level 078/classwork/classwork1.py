# Codewars 7 kyu: Digits explosion 

def explode(s):
    return ''.join(c * int(c) for c in s)