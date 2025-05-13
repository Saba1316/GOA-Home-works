# Codewars 7 kyu: Adjacent Double Double Letters

def adjacent_double_double_letters(word):
    for i, c in enumerate(word[:-3]):
        if c == word[i+1] and word[i+2] == word[i+3]:
            return True
    return False