# Create a manual_sum() function. That is, you should give a list as a parameter and the function should return the sum of the numbers in the list.

def manual_sum(arr):
    sum = 0

    for i in arr:
        sum += i

    return sum
print(manual_sum([10, 23, 40, 80, 120]))