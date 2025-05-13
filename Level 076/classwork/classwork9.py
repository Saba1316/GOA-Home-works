# Codewars 7 kyu: Boiled Eggs

import math
def cooking_time(eggs):
    parts = math.ceil(eggs / 8)
    return parts * 5