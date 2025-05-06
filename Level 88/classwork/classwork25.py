# Codewars 7 kyu: Disarium Number (Special Numbers Series #3)

def disarium_number(n):
    return "Disarium !!" if n == sum(int(d)**i for i, d in enumerate(str(n), 1)) else "Not !!"