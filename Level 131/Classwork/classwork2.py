# Codewars 5 kyu: 
# Phone Directory

def phone(strng, num):
    
    # remove unnecesary characters from input
    strng = strng.replace('_',' ').replace('  ',' ')
    unwantedpunct = ',:;$/!*?'
    for punct in unwantedpunct:
            strng =  strng.replace(punct,'')
    
    # check how many times does the substring (num) repeat
    counter = strng.count(num)
    
    # based on counter, do:
    if counter == 1:
        tolist = strng.split('\n') # split input into a list at line breaks
        for entry in tolist:       # check if each element on the list starts with a blank space and if it does, delete the first character
            if entry.startswith(' '): 
                entry = entry.replace(' ','',1) # the third parameter is a limit of how many occurrences will be replaced
    
            # extract relevant data from each element on the list:
            name =  entry[entry.find('<')+1:entry.find('>')] # using < and  > as delimiters, name will be extracted
            phone = entry[entry.find('+')+1:entry.find('+')+16].replace(' ','') # using + as starting delimeter and counting 16 spaces from the first occurrence of +, phone will be extracted
            address = entry.replace(f'<{name}>','').replace(f'+{phone}','').replace('   ',' ',1).replace('  ',' ',1) # deleting phone and name with their delimiters from input will return address
            # Codewars will not take a solution that is not an exact match, so the address string needs to be formated to delete certain blank spaces (start of string and end of string) 
            if address.endswith(' '):
                address = address[:-1]
            if address[0] != ' ':
                address = ' ' + address    
            # return only the element in which the input (num) was found
            if num == phone:
                return f'Phone => {phone}, Name => {name}, Address =>{address}'
    # return too many people if more than one occurrence of num was found in strng
    elif counter > 1:
        return f'Error => Too many people: {num}'
    # return not found  if num was not in strng        
    else: 
        return f"Error => Not found: {num}"