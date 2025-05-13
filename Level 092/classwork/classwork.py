# Leetcode: 268.Missing Number

class Solution:
    def missingNumber(self, nums: list[int]) -> int:
        answer = len(nums)
        num_set = set(nums)
        for i in range(answer + 1):
            if i not in num_set:
                return i