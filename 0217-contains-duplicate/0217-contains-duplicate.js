/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const freqMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (!freqMap[nums[i]]) freqMap[nums[i]] = 1;
    else return true;
  }
  return false;
};