# codewars 8 kyu: Localize The Barycenter of a Triangle

def bar_triang(a, b, c):
    return [round(sum(x)/3.0, 4) for x in zip(a, b, c)]