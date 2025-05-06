# Codewars 7 kyu: Simple string reversal

def solve(s):
    space_indexes = [i for i, v in enumerate(s) if v == " "]
    reversed_s = list("".join(s.split())[::-1])
    for i in space_indexes:
        reversed_s.insert(i, " ")
        
    return "".join(reversed_s)