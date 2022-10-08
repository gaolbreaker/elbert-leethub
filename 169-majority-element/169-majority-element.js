/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const counts = {};
  const n = nums.length;
  const half = n / 2;
  
  let el;
  
  for (let i = 0; i < n; i++) {
    el = nums[i];
    if (!counts[el]) counts[el] = 1;
    else counts[el]++;
    if (counts[el] > half) return el;
  }  
};