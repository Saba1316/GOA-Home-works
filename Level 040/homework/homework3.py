# Use map() to convert a list of strings representing numbers (e.g., ["1", "2", "3"]) into a list of integers.

def convert_to_integers(string_list):
    return list(map(int, string_list))


string_numbers = ["1", "2", "3"]
result = convert_to_integers(string_numbers)
print(result)  