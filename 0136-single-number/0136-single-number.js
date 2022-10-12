/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
//   // hash map solution: 
//   const hash = {};
//   let popped;
  
//   while (nums.length > 0) {
//     popped = nums.pop();
//     if (!hash[popped]) hash[popped] = 1;
//     else delete hash[popped];
//   }
//   return Object.keys(hash)[0];
  
  return nums.reduce((a, b) => a ^ b);
    
};