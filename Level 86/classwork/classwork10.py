# Codewars 7 kyu: Largest pair sum in array

from heapq import nlargest

def largest_pair_sum(a):
    return sum(nlargest(2, a))