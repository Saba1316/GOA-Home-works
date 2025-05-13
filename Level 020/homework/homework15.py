# Task 15: Create a function that is passed some sting, your duty is to make every second index letter uppercase.

def make_upper(str1):
    result = ""
    for i in range(len(str1)):
        if i % 2 == 0:
            result += str1[i].upper()
        else:
            result += str1[i]

    return result

print(make_upper("hello"))