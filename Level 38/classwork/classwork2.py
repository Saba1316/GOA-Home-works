# Create a function that takes an unlimited number of arguments and passes 7 words and returns a sentence

def create_sentence(*args):
    words = args[:7]
    sentence = ' '.join(words)
    return sentence + '.'

result = create_sentence("This", "is", "an", "example", "of", "a", "function", "that", "takes", "unlimited", "arguments.")
print(result)