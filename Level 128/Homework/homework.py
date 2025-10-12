# Codewars 5 kyu: Find the smallest.

def smallest(n):
  s, ans = str(n), [n, 0, 0]
  for i in range(len(s)):
    for j in range(len(s)):
      v = s[:i]+s[i+1:]
      v = v[:j]+s[i]+v[j:]
      this = [int(v), i, j]
      if this < ans: ans = this
  return ans