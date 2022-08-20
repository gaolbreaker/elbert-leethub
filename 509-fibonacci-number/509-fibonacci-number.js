/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    /*
      Input: integer n
      Output: F(n) the fibonacci number of n
      Constraints: 0 <= n <= 30
      Edge cases: ?
      
      F(0) = 0
      F(1) = 1
      F(2) = F(1) + F(0) = 1 + 0 = 1
      F(3) = F(2) + F(1) = 1 + 1 = 2
      F(4) = F(3) + F(2) = 2 + 1 = 3
    */
    
    /*
      base cases
        if 0, return 0
        if 1, return 1
      recursive case: n >= 2
        return fib(n - 1) + fib(n -2)
      
      walk through the recursion
      
      fib(3)
        
        return fib(2) + fib(1)
               fib(1) + fib(0) + fib(1)
               1      +   0  
                      1        +   1    = 
                             2
    */
  
    // if (n < 0) {
    //   throw 'Error!';
    // }
  
//     if (n === 0) {
//       return 0;
//     } else if (n === 1) {
//       return 1;
//     } else {
//       return fib(n - 1) + fib(n -2);
//     }
  
  /*
  
    if n = 0 return 0
    if n = 1 return 1
    otherwise, loop from 2 to n
      for 
  */
  
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  let arr = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i -1]);
  }
  
  return arr[n];
  
  // to-do, convert to more optimal solution, space complexity O(1)
    
};