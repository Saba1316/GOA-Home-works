# Codewars 7 kyu: Christmas mission: Programmer's Christmas #1

def merry_christmas(funcs):
    d = {f() : f.__name__ for f in funcs}
    return ','.join(map(d.get, "Merry Christmas!"))