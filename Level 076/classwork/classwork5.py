# Codewars 7 kyu: Find the vowels

def vowel_indices(word):
    vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    vowels_count = []

    # Go through the letters word.
    for index, letter in enumerate(word):
        # Check if the letter is in vowels list of vowels uppercase list.
        if letter in vowels or letter in [x.upper() for x in vowels]:
            # Save the index of the letter.
            vowels_count.append(index + 1)

    return vowels_count