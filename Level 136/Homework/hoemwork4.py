# Codewars 6 kyu: 
# Split Strings

def solution(s):
    ls = [s[i:i+2] for i,c in enumerate(s) if i % 2 == 0 and len(s[i:i+2]) == 2]
    if len(s) % 2 != 0:
        ls.append(s[-1] + "_")
    return ls