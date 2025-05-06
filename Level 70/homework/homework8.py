# codewars 7 kyu: Sum of array singles

def repeats(arr):
    return sum([el for el in arr if arr.count(el) == 1])