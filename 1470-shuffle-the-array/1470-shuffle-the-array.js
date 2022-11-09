/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  /*
    [0,    1,    2,    3] n = 2
     i          i+n
  */
  const res = [];
  
  for (let i = 0; i < n; i++) {
    res.push(nums[i]);
    res.push(nums[i+n]);
  }
  
  return res;
  
};