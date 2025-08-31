# Codewars 6 kyu: Highest Rank Number in an Array

def highest_rank(arr):
    # Sort the array in descending order. This ensures that if there are multiple numbers
    # with the same highest frequency, the larger number will come first.
    sorted_arr = sorted(arr, reverse=True)
    
    # Use max() to find the element in the sorted array that has the highest count (frequency).
    # The key=arr.count tells max() to compare elements based on how often they appear in 'arr'.
    return max(sorted_arr, key=arr.count)