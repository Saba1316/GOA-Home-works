# Codewars 5 kyu: 
# Value of x

def solve(eq: str) -> int:
    left, right = eq.split("=")
    left, right = left.strip(), right.strip()

    def parse(expr: str):
        tokens = expr.split()
        coef, const = 0, 0
        sign = 1
        i = 0
        while i < len(tokens):
            t = tokens[i]
            if t == '+':
                sign = 1
            elif t == '-':
                sign = -1
            elif t == 'x':
                coef += sign
                sign = 1
            else:  # number
                val = int(t)
                if i + 1 < len(tokens) and tokens[i+1] == 'x':
                    coef += sign * val
                    i += 1  # skip the 'x'
                else:
                    const += sign * val
                sign = 1
            i += 1
        return coef, const

    lcoef, lconst = parse(left)
    rcoef, rconst = parse(right)

    # Equation: lcoef*x + lconst = rcoef*x + rconst
    coef = lcoef - rcoef
    const = rconst - lconst

    return const // coef