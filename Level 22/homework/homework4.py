# Create a manual_replace() function. For those who don't know, google: replace function in python. Learn what it does and how, test it, and then do the job.


def manual_replace(string, pre, after):
    result = ""
    

    for i in string:
        if i == pre:
            result = result + after
        else:
            result = result + i

    return result

print(manual_replace("Saba", "a", "2" ))