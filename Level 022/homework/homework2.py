# Create a manual_len() function. That is, you should give a list as a parameter and the function should return how many elements are in the list.

def manual_len(arr):
    count = 0

    for i in arr:
        count += 1

    return count

print(manual_len([11, 12, 200, 100, 15]))