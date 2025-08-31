# Codewars 6 kyu: Generate All Chess960 Positions

from itertools import permutations

A = 'bbnnqrkr'
srp = set()
for r in permutations('bbknnqrr', 8):
    ib1, ib2 = r.index('b'), 7 - r[::-1].index('b')
    if (ib1 % 2) == (ib2 % 2):
        continue
    ir1, ir2, ik = r.index('r'), 7 - r[::-1].index('r'), r.index('k')
    if not ir1 < ik < ir2:
        continue
    srp.add(' '.join(r))
RP = sorted(srp)


def get_chess960_position(n):
    r = RP[n - 1]
    solution = '\n'.join((r, ' '.join(['p']*8), *[' '.join(['.']*8) for _ in range(4)], ' '.join(['P']*8), r.upper()))
    return solution + '\n'