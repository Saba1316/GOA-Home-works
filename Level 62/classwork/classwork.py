# Do any *args example

def print_args(*args):
    for arg in args:
        print(arg)

print_args(1, 2, 3)
print_args("a", "b", "c", "d")
print_args(50)