# Create a manual_max() function. That is, you should give a list as a parameter, and the function should find the maximum number in this list.

def manual_max(arr):
    num = arr[0]

    for i in arr:
        if i > num:
            num = i

    return num

print(manual_max([13, 16, 200, 2001, 29]))