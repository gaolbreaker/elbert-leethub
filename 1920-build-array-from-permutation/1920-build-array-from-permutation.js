/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
  
//   /*
//      0   1   2   3   4   5
//     [5,  0,  1,  2,  3,  4]    curr: {i: 4, v: 3} homeless: {i: 0, v: 5}
//                         
//   */
//   let temp;
//   let curr = {index: 0, val: nums[0]}
//   let homeless = null;
  
//   while (curr) {
//     homeless = curr;
//     nums[curr.index] = nums[curr.val]; [0, 4]
//     curr = {index: curr.val, val: nums[curr.val]}
//   }
  
//   return nums;
  
  
  /*
     0  1  2  3  4  5
    [0, 2, 1, 5, 3, 4]
  */
  
  let a, b, c, d;
  a = 0; // seed index
  b = nums[a] // val <-- this needs to be set to d
  c = b; // val as index
  d = nums[c]; // the val
  
  while (true) {
    
  }
  
  
};