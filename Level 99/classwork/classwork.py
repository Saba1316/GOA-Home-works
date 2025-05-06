# manual_isalnum()

def manual_isalnum(s):
    for n in s:
        if not n.isalpha() and not n.isdigit():
            return False
    return True


# manual_startswitch()

def manual_startswitch(s, prefix):
    return s[:len(prefix)] == prefix


# manual_endswitch()

def manual_endswitch(s, suffix):
    return s[-len(suffix):] == suffix

# manual_round()

def manual_round(x):
    if x - int(x) < 0.5:
        return int(x)
    else:
        return int(x) + 1
