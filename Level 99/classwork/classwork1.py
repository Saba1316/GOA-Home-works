# Leetcode: Median of Two Sorted Arrays

class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        merge = nums1+nums2
        merge.sort()
        n = len(merge)

        if n % 2 != 0:
            return merge[n//2]
        else:
            return (merge[n//2] + merge[n//2 - 1]) / 2