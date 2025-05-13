# Codewars 8 kyu: 
# Enumerable Magic #4 - True for None?


def none(lst, func):
    return not any(map(func, lst))