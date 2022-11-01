/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  
  let i = 0;  
  let sum = 0;
  while (i <= right) {
    if (i < left) {
      i++;
      continue;
    }
    // i >= left
    // console.log('left: ' + left + ' | ' + ' right: ' + right + ' i: ' + i + ' sum: ' + sum);
    // console.log(this.nums[i]);
    sum += this.nums[i];
    i++;
  }
  return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */