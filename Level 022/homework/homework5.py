# Create a manual_find() function. (we have already done it, remember how it was done and do it your way)

def manual_find(string, find_value):
    for i in range(len(string)):
        if find_value == string[i]:
            return i
        else:
            pass

print(manual_find("Hello Saba", "S"))