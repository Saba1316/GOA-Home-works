# Codewars 7 kyu: 
# Green Glass Door

def step_through_with(s):
    return any(m == n for m, n in zip(s, s[1:]))