# Codewars 7 kyu: Ten Green Bottles

def ten_green_bottles(n):
    numbers = {10: 'ten', 9: 'nine', 8: 'eight', 7: 'seven', 6: 'six', 5: 'five',
               4: 'four', 3: 'three', 2: 'two', 1: 'one', 0: 'no'}
    res = []
    for x in range(n, 0, -1):
        s = f"""{numbers[x].capitalize()} green bottle{'s' if x > 1 else ''} hanging on the wall,
{numbers[x].capitalize()} green bottle{'s' if x > 1 else ''} hanging on the wall,
{'And if' if x > 1 else "If that"} one green bottle should accidentally fall,
There'll be {numbers[x-1]} green bottle{'' if x-1 == 1 else 's'} hanging on the wall.
"""
        res.append(s)
    return '\n'.join(res)