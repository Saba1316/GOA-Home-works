# Codewars 7 kyu: 
# Reduce My Fraction

from fractions import Fraction
def reduce_fraction(fraction):
    t = Fraction(*fraction)
    return (t.numerator, t.denominator)