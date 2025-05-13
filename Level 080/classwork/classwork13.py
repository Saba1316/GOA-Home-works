# Codewars 7 kyu: Driving School Series #2

import math

def cost(mins):
    return 30 + 10 * math.ceil(max(0, mins - 60 - 5) / 30)