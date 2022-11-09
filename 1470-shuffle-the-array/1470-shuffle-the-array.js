/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  /*
    [0,    1,    2,    3] n = 2
     i          i+n
     
    [0, 1, 2, 3, 4, 5] n = 3, grab i + n first. and stick it at i + 1. 
    [0, 3, 2, n, 4, 5] swapped, out = 1
    [0, 3, 1, n, 4, 5] swapped, out = 2
    [0, 3, 1, 4, n, 5] swapped, out = 2
    [0, 3, 1, 4, 2, 5] swapped, out = 2
    [0, 3, 1, 4, 2, 5]
  */
  
  // extra memory version:
  const res = [];
  
  for (let i = 0; i < n; i++) {
    res.push(nums[i]);
    res.push(nums[i+n]);
  }
  
  return res;
  
};