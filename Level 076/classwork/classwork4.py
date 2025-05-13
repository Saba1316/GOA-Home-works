# Codewars 7 kyu: Love vs friendship

def words_to_marks(s):
    st = " abcdefghijklmnopqrstuvwxyz"
    return sum([st.index(i) for i in s])