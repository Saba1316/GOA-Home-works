# Codewars 7 kyu: Thinkful - String Drills: Areacode extractor

def area_code(text):
    return text[text.find("(")+1:text.find(")")]