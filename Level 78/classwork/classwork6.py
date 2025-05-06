# Codewars 7 kyu: How many arguments

def args_count(*args, **kwargs):
    return len(args) + len(kwargs)