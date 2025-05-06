# Codewars 7 kyu: Remove duplicate words

def remove_duplicate_words(s):
    l = []
    for word in s.split():
        if word not in l:
            l.append(word)
    return " ".join(l)