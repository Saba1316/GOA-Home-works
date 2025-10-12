# Codewars 6 kyu: 
# Title Case.

def title_case(title, minor_words=''):
    mw = minor_words.lower().split()
    s = []
    for i, w in enumerate(title.split()):
        s += [w.title() if w.lower() not in mw or i == 0 else w.lower()]
    return " ".join(s)