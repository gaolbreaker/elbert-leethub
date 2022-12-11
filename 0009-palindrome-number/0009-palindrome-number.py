class Solution:
    def isPalindrome(self, x: int) -> bool:
        x = str(x)
        i = 0
        while i < len(x) / 2:
          if x[i] != x[len(x) - 1 - i]:
            return False
          i += 1
        return True
          
"""
  [0, 1, 2, 3, 4, 5] len(x) = 6
   i

"""
          