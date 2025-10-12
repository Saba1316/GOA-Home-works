# Codewars 6 kyu : Stop gninnipS My sdroW!

def spin_words(sentence):
    return " ".join([w[::-1] if len(w) >= 5 else w for w in sentence.split()])