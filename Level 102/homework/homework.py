# Codewars 6 kyu: Draw a Circle.

def circle(radius):
    return '\n'.join(
        ''.join('#' if x**2 + y**2 < radius**2 else ' ' for x in range(1-radius, radius))
        for y in range(1-radius, radius)
    ) + '\n' * (radius >= 0)