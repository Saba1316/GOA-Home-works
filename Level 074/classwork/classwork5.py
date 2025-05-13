# Codewars 8 kyu: Grasshopper - Terminal Game Turn Function



def change_me(money): 
    if money == "20p":
        return "10p 10p"
    if money == "50p":
        return "20p 20p 10p"
    if "£" in money:
        return f"{'20p ' *(int(money[1:]) * 5)}".rstrip()
    return money