/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
//   // hash map solution: 
//   const hash = {};
//   let popped;
  
//   while (nums.length > 0) {
//     popped = nums.pop(); // I am popping from the array so while extra space is used, the array also shrinks, so would it be correct to say it's O(1) space complexity because it evens out?
//     if (!hash[popped]) hash[popped] = 1;
//     else delete hash[popped];
//   }
//   return Object.keys(hash)[0];
  
// bitwise operator solution
  return nums.reduce((a, b) => a ^ b);
    
};