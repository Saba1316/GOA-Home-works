# Codewars 7 kyu: Steve jumping

dmg = dict(zip("DBHW", (0, 0.5, 0.8, 1)))

def jumping(arr):
    hp = 20
    for i,(p1, p2) in enumerate(zip(arr, arr[1:]), 1):
        (h1, _), (h2, b) = p1.split(), p2.split()
        hp -= max(0, int((int(h1)-int(h2)-3.5)*(1-dmg[b])))
        if hp <= 0:
            return f"died on {i}"
    return f"jumped to the end with {hp} remaining HP"