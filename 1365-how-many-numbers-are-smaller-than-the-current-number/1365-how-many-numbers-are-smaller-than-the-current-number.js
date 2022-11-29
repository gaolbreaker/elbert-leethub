/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let count;
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[j] < nums[i]) {
        count++;
      }
    }
    res[i] = count;
  }
  return res;
};