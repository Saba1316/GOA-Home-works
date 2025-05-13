# Task 16: Create a function that is passed a list of numbers, your job is to create a new list and append the square of each number to the new list and then return the new list.

def old(listn):
    result = []

    for i in listn:
        result.append(i * i)

    return result

print(old([2, 4, 6, 8, 10]))