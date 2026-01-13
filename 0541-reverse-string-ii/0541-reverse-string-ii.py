class Solution(object):
    def reverseStr(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
        arr = list(s)
        n = len(arr)

        for i in range(0,n,2*k):
            left = i
            right = min(i + k -1,n -1)

            while left < right:
                arr[left],arr[right] = arr[right],arr[left]
                left += 1
                right -= 1
        return "".join(arr)        
        
            
            
        