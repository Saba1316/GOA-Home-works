# Codewars 6 kyu: 
# "Stringing"+"Me"+"Along"

def create_message(s):
    return lambda r="": create_message(f"{s} {r}") if r else s