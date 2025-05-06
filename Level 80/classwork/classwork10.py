# Codewars 7 kyu: All Inclusive?

def contain_all_rots(s, l):
    return all(s[i:]+s[:i] in l for i in range(len(s)))