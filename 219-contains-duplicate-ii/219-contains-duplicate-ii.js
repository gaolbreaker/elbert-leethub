/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  
  /*                                                                            i.       j.
     0. 1  2. 3. 4  5. 6   k = 2      3 4 5 6          k = 44               min 2       100, 142
    [1, 2, 3, 2, 4, 2, 5]
        x           x
        
    {
      2: [1, 2]
    }
  */
  
  /*
      0. 1. 2. 3
     [1, 0, 1, 1] k = 1
     hash = {
       1: [0, 2],
       0: [0, 1],
     }
  */
  
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = [i, 1]; // first element of tuple is last index where we saw the duplicate element
      
    } else {
      if(++hash[nums[i]][1] > 1) {
        console.log(hash[nums[i]]);
        if(Math.abs(i - hash[nums[i]][0]) <= k) return true;
        else hash[nums[i]][0] = i; // square brackets were in the wrong order
      }
    }
  }
  
  return false;
  
  // Don't confuse index with element of the array AT that index, i.e., i !== nums[i]
    
};