# Codewars 6 kyu:
# Steps in Primes

def is_prime(n):
    for i in range(2,int(n**0.5)+1):
        if n % i != 0:
            continue
        else:
            return False
    return True

def step(st, start, end):
    for n in range(start, end+1):
        if (is_prime(n)):
            if n+st<end and is_prime(n+st):
                return [n,n+st]
        else:
            continue
    return None