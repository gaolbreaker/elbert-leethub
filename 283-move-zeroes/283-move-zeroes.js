/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let curr = 0;
  while (curr < nums.length) {
    if (nums[curr] === 0) {
      nums.push(nums.splice(curr,1));
    } else {
      curr++;
    }
  }

    
};