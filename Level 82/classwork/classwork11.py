# Codewars 7 kyu: Simple Fun #144: Distinct Digit Year

def distinct_digit_year(year):
    year += 1
    while len(set(str(year))) != 4:
        year += 1
    return year
  #coding and coding.