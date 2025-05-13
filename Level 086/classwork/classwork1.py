# Codewars 7 kyu: Incrementer

def incrementer(nums):
    return [(n + i) % 10 for i, n in enumerate(nums, 1)]