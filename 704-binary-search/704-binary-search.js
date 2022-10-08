/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  
  /*
     0  1.2 3 4 5
    [-1,0,3,5,9,12] target = 9
     l.   m      r
            l.m  r
  */

  let left = 0;
  let right = nums.length - 1;
  
  while(left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (target < nums[mid]) right = mid - 1;
    if (target > nums[mid]) left = mid + 1;
  }
  
  return -1;
    
};