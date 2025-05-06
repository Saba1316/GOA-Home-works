# Codewars 7 kyu: How Green Is My Valley?

def make_valley(arr):
    arr = sorted(arr, reverse = True)
    return arr[::2] + arr[1::2][::-1]