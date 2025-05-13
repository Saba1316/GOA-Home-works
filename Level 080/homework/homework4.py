# Codewars 7 kyu: Where Are My Glasses?

import re

def find_glasses(lst):
    return next( i for i,s in enumerate(lst) if re.search(r'O-+O',s) )