# Codewars 7 kyu: Find Screen Size

def find_screen_height(width, ratio): 
    return f'{width}x{width * int(ratio.split(":")[1]) // int(ratio.split(":")[0])}'