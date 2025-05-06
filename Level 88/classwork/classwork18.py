# Codewars 7 kyu: Naughty or Nice?

def get_nice_names(people):
    return [p['name'] for p in people if p['was_nice']]

def get_naughty_names(people):
    return [p['name'] for p in people if not p['was_nice']]