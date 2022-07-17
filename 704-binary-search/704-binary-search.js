/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  
  while (low <= high) {
    // set mid
    mid = low + Math.ceil((high - low) / 2);
    
    // compare
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      // target is to the right of the current mid, so change left
      low = mid + 1;
    } else if (nums[mid] > target) {
      // target is the left of current mid, so change right
      high = mid - 1;
    }
  }
  
  return -1;
    
};