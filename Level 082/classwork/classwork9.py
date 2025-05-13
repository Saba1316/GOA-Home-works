# Codewars 7 kyu: Simple Fun #138: Similarity

def similarity(a, b):
    try:
        return len(set(a) & set(b)) / len(set(a) | set(b))
    except:
        return 0