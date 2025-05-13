# Codewars 8 kyu: Aspect Ratio Cropping - Part 1


from typing import Tuple
from math import ceil

def aspect_ratio(x: int, y: int) -> Tuple[int, int]:
    return (ceil(y * 16 / 9), y)