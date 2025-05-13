# Create a dictionary (object) of 3 cars with the same keys but different values ​​and present the customer as if you have to sell them some cars and tell them information about them

cars = {
    'car1': {
        'make': 'Toyota',
        'model': 'Camry',
        'year': 2022,
        'price': 25000
    },
    'car2': {
        'make': 'Honda',
        'model': 'Civic',
        'year': 2021,
        'price': 22000
    },
    'car3': {
        'make': 'Ford',
        'model': 'Mustang',
        'year': 2023,
        'price': 35000
    }
}

print("Welcome to our car dealership! Here are some options for you to consider:\n")

for car_id, details in cars.items():
    make = details['make']
    model = details['model']
    year = details['year']
    price = details['price']
    print(f"Car ID: {car_id}")
    print(f"  Make: {make}")
    print(f"  Model: {model}")
    print(f"  Year: {year}")
    print(f"  Price: ${price}")
    print()  # New line for better readability

print("Feel free to ask if you have any questions or if you'd like to take a test drive!")