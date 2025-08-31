# Codewars 6 kyu: 
# Clocky Mc Clock-Face.

def what_time_is_it(angle):
    angle %= 360
    h, m = divmod(angle, 30)
    return '{:02}:{:02}'.format(int(h or 12), int(m * 2))