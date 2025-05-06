# Codewars 7 kyu: Word to binary

def word_to_bin(word):
    return ['{:08b}'.format(ord(c)) for c in word]