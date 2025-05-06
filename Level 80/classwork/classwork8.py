# Codewars 7 kyu: Uglify Word

def uglify_word(s):
    flag = 1
    ugly = []
    for c in s:
        ugly.append(c.upper() if flag else c.lower())
        flag = not flag or not c.isalpha()
    return ''.join(ugly)