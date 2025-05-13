# Codewars 7 kyu: 
# Driving Licence

months = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split()

def driver(data):
    first, middle, surname, birth, sex = data
    day, month, year = birth.split("-")
    out = []
    
    # 1-5: surname, padded with "9"s
    out.append( surname[:5].upper().ljust(5, "9") )
    
    # 6: decade of birth
    out.append( year[-2] )
    
    # 7-8: month of birth, incremented by 50 for females
    month = months.index(month[:3]) + 1
    if sex == "F":
        month += 50
    out.append( str(month).zfill(2) )
    
    # 9-10: day of birth
    out.append( day )
    
    # 11: year of birth
    out.append( year[-1] )
    
    # 12-13: initials of the first names, padded with "9"
    if middle == "":
        middle = "9"
    out.append( first[0] )
    out.append( middle[0] )
    
    # 14: arbitrary digit (use "9")
    out.append( "9" )
    
    # 15-16: check digits (use "AA")
    out.append( "AA" )
    
    return "".join(out)