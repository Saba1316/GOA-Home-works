# Leetcode: Valid Anagram

# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         if len(s) != len(t):
#             return False
#         cnt = counter(s)
#         for c in t:
#             cnt[c] -= 1
#             if cnt[c] < 0:
#                 return False
#         return True