# Codewars 7 kyu: Cats and shelves

def solution(start, finish):
    steps_of_three = (finish - start) // 3
    steps_of_one =  (finish - start) - steps_of_three*3
    return steps_of_three + steps_of_one