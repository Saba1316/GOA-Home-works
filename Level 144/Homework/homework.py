# Codewars 6 kyu: 
# Consecutive strings

def longest_consec(strarr, k):
    if len(strarr) < k or len(strarr) == 0 or k <= 0:
            return ''  
    
    newList = []
    
    def mkList(strarr = strarr, k = k):
        if len(strarr) < k:
            return
        
        string = ''
        
        for a in strarr[:k]:
            string += a
        
        newList.append([string, len(string)])
        strarr.pop(0)
        mkList()
    
    mkList()

    value, maxLen = max(newList, key = lambda item: item[1])
    
    return value