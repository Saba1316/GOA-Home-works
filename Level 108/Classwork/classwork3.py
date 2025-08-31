# Codewars 6 kyu: 
# Sort the number sequence

def sort_sequence(l):
    n = []
    a = 0
    for i in range(len(l)):
        if l[i] == 0:
            n.append(sorted(l[a:i])+[0])
            a = i + 1
    return [a for l in sorted(n,key=sum) for a in l]