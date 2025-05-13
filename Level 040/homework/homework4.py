# Use `map()` to append the string "!" to each word in a list of words.

def append_exclamation(words):
    return list(map(lambda word: word + "!", words))


words_list = ["hello", "world", "python"]
result = append_exclamation(words_list)
print(result)  
