# Leetcode: Plus One

class Solution:
    def plusOne(self, digits: list[int]) -> list[int]:
        return [int(num) for num in str(int("".join(map(str, digits))) + 1)]