/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  
  /*
    [0,1,2,4,5,7]
                 c
               l
               r
    [0, 3]
          c
        l
        r
  */
  
  if (nums.length === 0) return [];
  if (nums.length === 1) return nums.map((e) => e.toString());
  
  let curr = 1; // represents an index
  let result = [];
  let left = 0; // represents an index
  let right = 0; // represents an index
  
  while (curr < nums.length) {
    if (nums[curr] === nums[curr - 1] + 1) { // case 0: the contiguity continues
      right = curr;
    } else { // case 1: we have broken the contiguity
      // push to the result:
      // case 1.a.: left and right are the same
      if (left === right) result.push(nums[left].toString());
      // case 1.b.: left and right are different
      else result.push(nums[left].toString() + '->' + nums[right]);
      left = right = curr;
    }
    curr++;
  }
  
  // the last segment has to be dealt with:
  // case 1.a.: left and right are the same
  if (left === right) result.push(nums[left].toString());
  // case 1.b.: left and right are different
  else result.push(nums[left].toString() + '->' + nums[right]);
  
  return result;
};