# codewars 7 kyu: Simple consecutive pairs

def pairs(arr):
    return len([(arr[i],arr[i+1]) for i in range(0,len(arr)-1, 2) if abs(arr[i]-arr[i+1]) == 1])