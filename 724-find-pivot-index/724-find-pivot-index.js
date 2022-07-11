/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
      var leftSum = 0;
      var rightSum = 0;
      // determine the left sum, 0 if i = 0
      if (i > 0) {
        leftSum = nums.slice(0, i).reduce((a, b) => a + b);
      }
      // determine the right sum
      if (i < nums.length - 1) {
        rightSum = nums.slice(i + 1).reduce((a, b) => a + b);
      }
      // is the left sum === right sum?
      if (leftSum === rightSum) {
        // if so, return the pivot index i
        return i;
      }
    }
    // otherwise, return -1
    return -1;
};