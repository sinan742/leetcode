class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        counts={}

        for ch in magazine:
            counts[ch] = counts.get(ch,0) +1

        for ch in ransomNote:
            if ch not in counts or counts[ch] ==0:
                return False
            counts[ch] -= 1
        return True            
        