# Codewars 6 kyu: 
# Format words into a sentence


def format_words(words):
    if words is None:
        return ''
    words = [i for i in words if i]
    return ' and '.join(words).replace(' and', ',', len(words)-2)