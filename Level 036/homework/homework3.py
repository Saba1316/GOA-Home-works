# Take any list in which other lists (with 3-3 elements) will be inserted and output the final result where the arithmetic mean of all lists will be

lists = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]

flat_list = [item for sublist in lists for item in sublist]

print (sum(flat_list) / len(flat_list))