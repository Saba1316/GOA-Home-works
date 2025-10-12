# Codewars 5 kyu: Write out numbers.

tens_place = {
    "0": "",
    "2": "twenty",
    "3": "thirty",
    "4": "forty",
    "5": "fifty",
    "6": "sixty",
    "7": "seventy",
    "8": "eighty",
    "9": "ninety"
}

tens = {
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen"
}

ones = {
    "0": "",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine"
}

def maketens(n):
    if n[0] == "0":
        return ones[n[1]]
    elif n[0] == "1":
        return tens[str(n)]
    if n[1] == "0": return tens_place[n[0]]
    return tens_place[n[0]] + "-" + ones[n[1]]

def makehundreds(n):
    if int(n)==0: return ""
    x=""
    if n[0] == "0": return maketens(n[1:])
    if maketens(n[1:]): x=" "
    return ones[n[0]] + " hundred" + x + maketens(n[1:])

def makethousands(n):
    x=""
    if int(n[1:]): x=" "
    return ones[n[0]] + " thousand" + x + makehundreds(n[1:])

def make2thousands(n):
    return maketens(n[0:2]) + " thousand " + makehundreds(n[2:])

def make3thousands(n):
    return makehundreds(n[0:3]) + " thousand " + makehundreds(n[3:])

def number2words(n):
    if n==0: return "zero"
    length = len(str(n))
    ns = str(n)
    if length == 1:
        return ones[ns]
    if length == 2:
        return maketens(ns)
    if length == 3:
        return makehundreds(ns)
    if length == 4:
        return makethousands(ns)
    if length == 5:
        return make2thousands(ns)
    if length == 6:
        return make3thousands(ns)