# Codewars 7 kyu: Divide and Conquer

def div_con(arr):
    return sum([el if type(el) == int else -int(el) for el in arr])