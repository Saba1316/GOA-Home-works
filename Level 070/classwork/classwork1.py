# codewars 7 kyu: Number of People in the Bus

def number(bus_stops):
    return sum([stop[0] - stop[1] for stop in bus_stops])