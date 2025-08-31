# Codewars 6 kyu: Simple Sentences

def make_sentences(parts):
    return ' '.join(parts).replace(' ,', ',').strip(' .') + '.'