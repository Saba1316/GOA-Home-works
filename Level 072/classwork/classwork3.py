# codewars 8 kyu: Evil or Odious

def evil(n):
    return "It's Odious!" if bin(n).count('1') % 2 else "It's Evil!"