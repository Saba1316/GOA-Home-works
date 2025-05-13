# Make an example of a decorator function


def my_decorator(func):
    def wrapper():
        print("Decorator at work!")
        func()  
        print("Next Move")
    return wrapper


def say_hello():
    print("Hello, World!")


decorated_function = my_decorator(say_hello)


decorated_function()