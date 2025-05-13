# Codewars 8 kyu:
# Return Two Highest Values in List


def two_highest(arg1):
    return sorted(set(arg1), reverse=True)[:2]