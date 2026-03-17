class Solution(object):
    def splitWordsBySeparator(self, words, separator):
        """
        :type words: List[str]
        :type separator: str
        :rtype: List[str]
        """
        res = []
        for i in words:
            res += i.split(separator)
        return list(filter(None, res))
        
        
        