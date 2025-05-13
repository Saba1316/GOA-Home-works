# Codewars 7 kyu: 
# Lottery machine

import re
def lottery(s):
    matches = re.findall('[0-9]', s)
    used_nums, output = set(), []
    if not matches:
        return 'One more run!'
    for num in matches:
        if num not in used_nums:
            output.append(num)
            used_nums.add(num)
    return ''.join(output)