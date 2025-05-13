# Take two lists of different lengths and add the squares of the values ​​of the second list to the first list using map

def add_squares(list1, list2):
    
    squared_list2 = map(lambda x: x ** 2, list2)
    result = list(map(lambda a, b: a + b, list1, squared_list2))
    return result

list1 = [1, 2, 3]
list2 = [4, 5]  
result = add_squares(list1, list2)
print(result)