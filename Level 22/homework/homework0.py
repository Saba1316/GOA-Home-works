# Create a manual_min() function. That is, you should give a list as a parameter and the function should find the minimum number in this list.

def manual_min(arr):
    num = arr[0]

    for i in arr:
        if i < num:
            num = i

    return num

print(manual_min([13, 16, 17, 25, 29]))