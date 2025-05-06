# Codewars 7 kyu: Simple Fun #176: Reverse Letter

def reverse_letter(s):
  return ''.join([i for i in s if i.isalpha()])[::-1]