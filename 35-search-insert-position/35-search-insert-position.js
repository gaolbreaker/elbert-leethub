/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var left = 0;
  var mid;
  var right = nums.length - 1;
  
  while(left <= right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) return mid;
    if (target < nums[mid]) right = mid - 1;
    if (nums[mid] < target) left = mid + 1;
  }
  return left;
  
  /*
  target: 7
  [1, 3, 5, 6]
            lr
  */
    
};