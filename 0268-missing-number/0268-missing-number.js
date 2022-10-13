/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  /*
  
  [3, 0, 1, undefined] u = 3
  [undefined, 0, 1, 3] u = 0
  [0, undefined, 1, 3]
  [0, 1, undefined, 3]
  
  [1, 2, undefined]
  
  */
  
  let undefinedIndex = nums.length;
  const length = nums.length
  nums.push(undefined);
  let i = 0;
  let temp;
  
  while (i <= length) {
    if (nums[i] !== i) { // element at index i is NOT i
      
      temp = nums[i]; // temporarily store the element at index i
      nums[i] = nums[temp]; // swap , put in undefined
      nums[temp] = temp; // swap, put in 3
      
      if (nums[i] === undefined) {
        undefinedIndex = i;
        i++;
      }
    } else i++;
  }
  
  return undefinedIndex;
};