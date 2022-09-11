/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    /*
      I: array of integers
      O: integer representing the most frequent even element in the input array
      C: 1 <= nums.length <= 2000
         0 <= nums[i] <= 100,000
      E: in case there is a tie, choose the smallest element
         if there are no even elements, return -1
         
      Naive solution
      declare an object variable, use as hash map
      declare a variable to keep track of current mostFrequentEvenElement (max)
      iterate through the array and store counts of even elements
      return -1 or max
      
      Example 1
      nums = [0,1,2,2,4,4,1]
      
      hashMap = {0: 1; 2: 2}
      max = 2
      
      
    */
  
    const hashMap = {};
    let max = null;
    
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        if (!hashMap[nums[i]]) {
          hashMap[nums[i]] = 1;
        } else {
          hashMap[nums[i]]++;
        }
        if (max === null) {
          max = nums[i]; 
        } else {
          // compare the frequency of max vs frequency of nums[i]
          if (hashMap[nums[i]] > hashMap[max]) {
            max = nums[i];
          }
          else if (hashMap[nums[i]] === hashMap[max] && nums[i] < max) {
            max = nums[i];
            // if nums[i] is more frequent AND nums[i] < max then update max
            // otherwise do not update max
          }
          
        }
      }
    }
  
    if (max !== null) return max;
    return -1;
    
  
  
};