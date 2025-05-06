# Codewars 7 kyu: Naughty or Nice?

def what_list_am_i_on(a):
    return 'nice' if sum(i[0] in 'gsn' for i in a) > sum(i[0] in 'bfk' for i in a) else 'naughty'