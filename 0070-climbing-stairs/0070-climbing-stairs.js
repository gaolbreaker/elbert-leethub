/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  /*
  
    Playground
    
      n = 2
      1 + 1
      2
      n = 3
      1 + 1 + 1
      1 + 2
      2 + 1
      n = 4
      1 + 1 + 1 + 1
      1 + 1 + 2
      1 + 2 + 1
      2 + 1 + 1
      2 + 2
      
     1 2 3 4 5 6  .... 20
     1 2 3 5 8
      
    Pseudocode
      declare results arr and seed it with [1, 2]
      if n === 1 return 1
      if n === 2 return 2
      loop from index 2 to n
        in each loop, sum the previous two numbers
      return last element in results array
  */
  
//   [1, 2, 3, 5] n = 4
  
//   res = [1, 2, 3, 5]
  
  if (n === 1) return 1;
  if (n === 2) return 2;
  const results = [1, 2];
  for (let i = 2; i < n; i++) {
    results[i] = results[i - 1] + results[i - 2];
  }
  return results[n - 1];
  
};