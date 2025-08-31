# Codewars 6 kyu: Triangle number check.

def is_triangle_number(number):
    if not isinstance(number,int):
        return False
    return (((number*2)**0.5)//1)*(((number*2)**0.5)//1+1)*0.5==number