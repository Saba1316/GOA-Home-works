# Codewars 8 kyu: Playing with cubes II



def html_special_chars(data): 
    symbols = {'<': '&lt;', '>': '&gt;', '"': '&quot;', '&': '&amp;'}
    return "".join(symbols.get(x, x) for x in data)