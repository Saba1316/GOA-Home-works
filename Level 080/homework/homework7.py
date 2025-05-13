# Codewars 7 kyu: Guess the upcoming election result

def expected_party_rank(A,B,sA,sB):
    A, B = A+sA, B+sB
    return [ c for _,c in sorted(zip([-A,-B,A+B-100], 'ABC')) ]