# Codewars 6 kyu : 
# Reverse or rotate?

def rev_rot(strng, sz):
    if sz <= 0 or not strng or sz > len(strng):
        return ""

    chunks = [strng[i:i + sz] for i in range(0, len(strng), sz) if len(strng[i:i + sz]) == sz]
    return ''.join(chunk[::-1] if sum(map(int, chunk)) % 2 == 0 else chunk[1:] + chunk[0] for chunk in chunks)