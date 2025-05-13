# Codewars 7 kyu: Coding Meetup #2 - Higher-Order Functions Series - Greet developers

def greet_developers(lst): 
    for x in lst:
        x["greeting"] = f"Hi {x['firstName']}, what do you like the most about {x['language']}?"
    return lst