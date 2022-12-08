class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for i, val in enumerate(nums):
          if (target - val) in map:
            return [map[target - val], i]
          else:
            map[val] = i
          
        
"""

[2, 7, 11, 15]
    ^
    
{2: 0} does needed element exist in seen hashtable?
    
9

  U
    I: list, int
    O: [int, int] representing indices of elements that add up to input integer
  M:
    brute force
      two loops
    more optimized solution
      hint from christine:
        some other data structure ...?
      map for val: index
      loop through nums
        at each iteration
  P
  I
  R
  E

"""