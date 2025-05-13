# Codewars 7 kyu: The Hidden Word

def hidden(num):
    return str(num).translate(str.maketrans("6174329805", "abdeilmnot"))