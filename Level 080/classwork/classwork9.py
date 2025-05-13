# Codewars 7 kyu: Drawing a Cross!

def draw_a_cross(n):
    if n<3:     return "Not possible to draw cross for grids less than 3x3!"
    if not n%2: return "Centered cross not possible!"
    half = [ f'x{ " "*(n-2*i-2) }x'.center(n) for i in range(n//2)]
    return "\n".join([*half, 'x'.center(n), *reversed(half) ])