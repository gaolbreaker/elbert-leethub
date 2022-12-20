/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  /*
    I: sorted array nums, int target
    O: index where the target is, or -1 if not in nums
      0 1 2 3 4 5
    [-1,0,3,5,9,12]
      l     m    r
  */
  
  let l = 0;
  let r = nums.length - 1;
  
  while (l <= r) {
    m = Math.floor(l + (r - l)/2);
    if (nums[m] === target) {
      return m;
    } else if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      r = m - 1;
    }
  }
  return -1;
  
};