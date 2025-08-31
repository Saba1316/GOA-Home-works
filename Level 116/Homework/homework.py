# Codewars 4 kyu: 
# Sum Strings as Numbers

def sum_strings(x, y):
    res, nxt = '', 0
    for i in zip(x.zfill(len(y))[::-1], y.zfill(len(x))[::-1]):
        nxt, cur = divmod(sum(map(int, i)) + nxt, 10)
        res += str(cur)
    return (str(nxt) + res[::-1]).lstrip('0') or '0'