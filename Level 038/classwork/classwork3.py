# Take a sentence and filter out all the bad words like 'lazy' 'boring' and so on.

def filter_bad_words(sentence, bad_words):
    
    words = sentence.split()
    filtered_words = filter(lambda word: word.lower() not in bad_words, words)
    return ' '.join(filtered_words)

bad_words = {'lazy', 'boring', 'dull'}
sentence = "This is a lazy and boring example of a dull sentence."
filtered_sentence = filter_bad_words(sentence, bad_words)
print(filtered_sentence)