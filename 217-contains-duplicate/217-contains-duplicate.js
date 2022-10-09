/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  /*
    I: array of nums
    O: true of false--does the array of nums contain at least one duplicate?
    C: 1 <= nums.length <= 10**5
       -10^9 <= nums[i] <= 10^9
    E: 
      [] no valid
      [e] false
      [e1, e2, ..., nums.length - 1] do the logic
      [e1, e1, e1, e1] all duplicates --> true
    Pseudo:
      approach 1) 
        create a hash map to keep track of counts of nums[i] // space O(k) where k is number of unique elements, 1 <= k <= n
        once any property of the hash map > 1 then return false immediately // time complexity O(n) in worse case
        
      approach 2)
        sort the array // nums.sort() // nlog(n) if quicksort or merge sort in average case
        iterate through the array and test if any element is equal to the previous element // iterate through
        
      approach 3)
        for each element, // n
          iterate through the entire array to see if any of the other elements === that element // n
        Time complexity O(n**2)
        Space complexity O(1)
  */
  
  /*
    [1,2,3,1]
     i
    {}
  */
  
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) { // if not in hash map yet
      hash[nums[i]] = 1;
    } else {
      if (++hash[nums[i]] > 1) return true;
    }
  }
  return false;
  
  // Stop confusing the index with the element of the array AT that index, Elbert!!!!!1
};