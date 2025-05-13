# Codewars 7 kyu: Filter the number

def filter_string(string):
    return int(''.join(filter(str.isdigit, string)))