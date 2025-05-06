# Codewars 7 kyu: My Language Skills

def my_languages(results):
    return sorted([k for k,v in results.items() if v >= 60], key=lambda x: results[x], reverse=True)