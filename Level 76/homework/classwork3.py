# Codewars 7 kyu: Maximum Product

def adjacent_element_product(array):
    return max(map(lambda x: x[0]*x[1], zip(array[0:-1], array[1:])))