# Codewars 7 kyu: Naughty or Nice

def naughty_or_nice(data):
    a, b = str(data).count('Nice'), str(data).count('Naughty')
    return "Naughty!" if b>a else 'Nice!'