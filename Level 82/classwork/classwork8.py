# Codewars 7 kyu: Simple Fun #147: Find The Missing Tree

def find_the_missing_tree(trees):
  return sorted(trees, key=trees.count)[0]