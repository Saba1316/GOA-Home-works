# Codewars 6 kyu: Bingo!

# import numpy as np

# def bingo(card, numbers, value="FREE SPACE"):
#     matrix = np.array(card)[1:, :]
#     row = [x[1:] for x in numbers]
#     matrix = np.where(np.isin(matrix, row), value, matrix)
#     for line in np.vstack([matrix, matrix.T, matrix.diagonal(), np.fliplr(matrix).diagonal()]):
#         if np.all(line == value): return True
#     return False