# Codewars 7 kyu: Adding words - Part I

class Arith():
    def __init__(self, first):
        self.NUMS = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"]
        self.first = first
  
    def add(self, second):
        return self.NUMS[self.NUMS.index(self.first) + self.NUMS.index(second)]