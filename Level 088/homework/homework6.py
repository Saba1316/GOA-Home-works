# Codewars 7 kyu: Vowel one

def vowel_one(s):
    result, vowels = '','aeiou'
    for letter in s:
        if letter.lower() in vowels:
            result += '1'
        else:
            result += '0'
    return result