# Codewars 6 kyu: 
# Positions Average

from itertools import permutations

def pos_average(s):
    arr, total, n = s.split(', '), 0, 0
    for a, b in permutations(range(len(arr)), 2):
        n += 1
        total += sum(1 for x, y in zip(arr[a], arr[b]) if x==y)
    return 100 * total/(len(arr[0])*n)