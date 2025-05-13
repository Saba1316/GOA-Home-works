# codewars 8 kyu: Neutralisation


def neutralise(s1, s2):
    return ''.join(map(lambda a, b: ["0", a][a == b], s1, s2))