# codewars 8 kyu: Is your period late?


def period_is_late(last, today, cycle_length):
    return (today - last).days > cycle_length