# Codewars 7 kyu: Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark

def remove(s):
    return ' '.join(w for w in s.split(' ') if w.count('!') != 1)