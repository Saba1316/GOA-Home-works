# Codewars 8 kyu: Safen User Input Part I - htmlspecialchars


def excludingVatPrice(price):
    return round(price / 1.15, 2) if price else -1