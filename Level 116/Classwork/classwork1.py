# Codewars 4 kyu: Twice Linear

def dbl_linear(n):
    u = [1]
    x_idx = 0
    y_idx = 0

    while len(u) <= n:
        next_x = 2 * u[x_idx] + 1
        next_y = 3 * u[y_idx] + 1
        if next_x < next_y:
            u.append(next_x)
            x_idx += 1
        elif next_y < next_x:
            u.append(next_y)
            y_idx += 1
        else:
            u.append(next_x)
            x_idx += 1
            y_idx += 1
    
    return u[n]