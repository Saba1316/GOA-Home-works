# Codewars 8 kyu: 
# Coding 3min : Jumping Dutch act

def sc(n: int) -> str:
    """Given n, returns a string which fulfills with the Kata task.
    """
    if n<=1:return ""
    if n<=6:return 'Aa~ ' * (n-1) + 'Pa! Aa!'
    else:return 'Aa~ ' * (n-1) + 'Pa!'