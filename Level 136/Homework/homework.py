# Codewars 6 kyu: 
# Find the Mine!

def mine_location(field):
  for row_idx, row in enumerate(field):
    for col_idx, cell in enumerate(row):
      if cell == 1:
        return [row_idx, col_idx]