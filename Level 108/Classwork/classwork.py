# Codewars 6 kyu: Consonant value


import re
def solve(s):
    '''Returns the maximum numeric value of consonant substring in 
    s'''
    s = re.sub('[aeiou]+', ' ', s)
    s = s.split(' ')
    maximum = 0
    alphabet = '-abcdefghijklmnopqrstuvwxyz'
    for group in s:
        total = 0
        for letter in group:
            total += alphabet.index(letter)
            if total > maximum:
                maximum = total
    return maximum