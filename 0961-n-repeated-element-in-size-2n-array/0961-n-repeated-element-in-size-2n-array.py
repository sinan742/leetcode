class Solution(object):
    def repeatedNTimes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        for num in nums:
            if nums.count(num) > 1:
                return num
