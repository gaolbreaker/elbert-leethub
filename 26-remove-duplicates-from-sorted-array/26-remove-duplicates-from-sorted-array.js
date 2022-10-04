/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    let prev = null;
    while (i < nums.length) {
      if (nums[i] === prev) {
        nums.splice(i, 1);
      } else {
        // set prev before incrementing
        prev = nums[i];
        // increment
        i++;
      }

    }
    // return nums.length;
};