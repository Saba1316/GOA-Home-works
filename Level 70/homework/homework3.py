# codewars 7 kyu: Form The Minimum

def min_value(digits):
    return int("".join(sorted(list(set([str(num) for num in digits])))))