# Codewars 8 kyu: 
# Geometry Basics: Circle Circumference in 2D


from math import pi

def circle_circumference(circle):
    return round(2 * circle.radius * pi, 6)