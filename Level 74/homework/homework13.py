# Codewars 8 kyu: They say that only the name is long enough to attract attention. 
# They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?


def is_opposite(s1, s2):
    return False if not(s1 or s2) else s1.swapcase() == s2