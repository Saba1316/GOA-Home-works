# Codewars 7 kyu: Target Date

from datetime import datetime
from datetime import timedelta

def date_nb_days(a0, a, p):
    day = 0
    start = '2016/01/01'
    while a0 < a:
        a0 = a0 + (a0*p/100/360)
        day += 1
    date = datetime.strptime(start, '%Y/%m/%d')
    date += timedelta(days=day)
    return datetime.strftime(date, '%Y-%m-%d')