# Create a dictionary with 3 key:value pairs and with the help of a for loop output key, value in the following format "Key: {key}, Value: {value}" (you will need the .items() method)


my_dict = {
    'name': 'Sesili',
    'age': 8,
    'city': 'Tbilisi'
}

for key, value in my_dict.items():
    print(f"Key: {key}, Value: {value}")