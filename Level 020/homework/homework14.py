# Task 14: Create a function that is given a list of numbers, your task is to calculate the arithmetic mean of this list.

def list_print(listn):
    sum = 0

    for n in listn:
        sum += n
    print((sum)/(len(listn)))

list_print([10, 20, 30, 40, 50])