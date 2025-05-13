# Codewars 7 kyu: Area of a Circle

import math

def circle_area(r):
    if r <= 0.0:
        raise ValueError()
    return math.pi * r * r