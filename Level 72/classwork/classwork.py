# codewars 8 kyu: Thinkful - Number Drills: Blue and red marbles


def guess_blue(bs, rs, bp, rp):
    n = bs - bp
    d = n + rs - rp
    return n/d if d else 0