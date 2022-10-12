/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  /*
   0  1  2  3  4
  [4, 1, 2, 1, 2]
   1
   

  
   
  */
  
//   let product;
  
//   if (nums.length === 1) {
//     return nums[0];
//   } else if (nums.filter(e => e === 1 || e === -1).length === 1) {
//     return 1;
//   } else {
//     // remove ones
//     nums = nums.filter(e => e !== 1 && e !== -1);
//     console.log(nums);
//     if (nums.length === 1) return nums[0];
//     else if (nums.length % 2 === 0) return -1;
//     product = Math.abs(nums.reduce((a, b) => a * b));
//     let i = 0;
//     while (product >= 1 && nums[i]) {
//       if ((product / (nums[i] ** 2)) <= 1) return nums[i];
//       product /= (Math.abs(nums[i]));
//       i++;
//       console.log(i, nums[i]);
//     }
//     return nums[nums.length - 1];
//   }      
  
  const hash = {};
  let popped;
  
  while (nums.length > 0) {
    popped = nums.pop();
    if (!hash[popped]) hash[popped] = 1;
    else delete hash[popped];
  }
  return Object.keys(hash)[0];
    
};