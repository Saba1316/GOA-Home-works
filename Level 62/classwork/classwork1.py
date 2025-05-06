# Do some **kwargs example

def print_kwargs(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")


print_kwargs(name="Saba", age=15, city="Tbilisi")
print_kwargs(language="Python", level="Advanced")