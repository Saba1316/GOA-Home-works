# Codewars 7 kyu: The Speed of Letters

from string import ascii_uppercase as au
def speedify(s):
    r = []
    x = 0
    for i in s:
        m = au.index(i)
        r += [' ']*(m+1)
        r[x+m] = i
        x += 1
    return ''.join(r).rstrip()