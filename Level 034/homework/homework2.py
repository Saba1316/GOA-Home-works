# Create a function that takes numbers, some strings and some integers (eg [10, "10"]) and outputs their sum. 
# (Handle exceptions without try/except. hint: use list comprehension for simplicity


def sum_numbers(items):
    
    return sum(int(item) for item in items if isinstance(item, int) or (isinstance(item, str) and item.isdigit()))


print(sum_numbers([10, "10", "20", 30]))  
