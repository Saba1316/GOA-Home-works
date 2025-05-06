# Codewars 7 kyu: Simple Fun #137: S2N

def S2N(m, n):
  return sum(i**j for i in range(m+1) for j in range(n+1))