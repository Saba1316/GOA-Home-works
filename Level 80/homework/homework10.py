# Codewars 7 kyu: Simple Fun #136: Missing Values

def missing_values(seq): 
    a, b = sorted(seq, key=seq.count)[:2]
    return a * a * b