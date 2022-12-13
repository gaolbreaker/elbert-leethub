class Solution:
    def isValid(self, s: str) -> bool:
      list = []
      map = {
        ')': '(',
        ']': '[',
        '}': '{'
      }
      for char in s:
        if char in map:
          if len(list) > 0:
            poppedParens = list.pop()
          else:
            return False
          if not map[char] == poppedParens:
            return False
        else:
          list.append(char)
      if not len(list) == 0:
        return False
      return True
        
        
"""

()
^

list = ["("]

map = {
  ')': '(',
  etc.
}


"""