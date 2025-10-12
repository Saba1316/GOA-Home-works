# Codewars 6 kyu: 
# Duplicate Arguments

def solution(*args, **kwargs):
    return len(set(args)) != len(args)