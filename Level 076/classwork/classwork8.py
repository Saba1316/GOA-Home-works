# Codewars 7 kyu: Switcheroo

def switcheroo(string):
    return ''.join([char if char =='c' else ['a','b'][1-['a','b'].index(char)] for char in string])