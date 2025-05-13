# Codewars 7 kyu: Turkish Numbers, 0-99

def get_turkish_number(num):
    db = 'sıfır bir iki üç dört beş altı yedi sekiz dokuz on yirmi otuz kırk elli altmış yetmiş seksen doksan'.split()
    return f'{num>9 and db[num//10+9] or ""} {num%10>0 and db[num%10] or ""}'.strip() or db[num]