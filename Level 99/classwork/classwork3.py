# Leetcode: Maximum Gap


class Solution:
    def maximumGap(self, nums: list[int]) -> int:
        if len(nums)<2:
            return 0
        ls = sorted(nums)
        a = []
        for i in range(1,len(ls)):
            a.append(ls[i]-ls[i-1])
        return max(a)