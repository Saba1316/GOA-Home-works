# Codewars 7 kyu: What a "Classy" Song

class Song:
    def __init__(self, title, artist):
        self.title = title
        self.artist = artist
        self._seen = set()
    
    def how_many(self, people):
        tmp = set(map(str.lower, people))
        res = len(tmp - self._seen)
        self._seen.update(tmp)
        return res