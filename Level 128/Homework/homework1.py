# Codewars 5 kyu: 
# Simple fraction to mixed number converter.

from math import gcd
def mixed_fraction(s):
    t,n = map(int,s.split('/'))
    neg=False
    if t/n < 0:
        neg=True
    t=abs(t)
    n=abs(n)
    i,r = divmod(t,n)
    d = gcd(n,r)
    if neg:
        t=-t
        i=-i
        
    if t==0:
        return str(t)
    if r==0:
        return str(i)
    if i ==0:
        if neg:
            r=-r
        return '{}/{}'.format(r//d,n//d)
    if r !=0:
        return '{} {}/{}'.format(i,r//d,n//d)
    