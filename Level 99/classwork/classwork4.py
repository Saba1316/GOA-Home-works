# Leetcode: Permutations


from itertools import permutations
class Solution:
    def permute(self, nums: list[int]) -> list[list[int]]:
        return list(permutations(nums))