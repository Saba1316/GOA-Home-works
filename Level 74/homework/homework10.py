# Codewars 8 kyu: 
# NBA full 48 minutes average


def nba_extrap(ppg, mpg):
    return round(48.0 / mpg * ppg, 1) if mpg > 0 else 0