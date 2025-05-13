# Codewars 7 kyu: Password validator

import re

def password(s):
    return bool(re.match(r'(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8}', s))