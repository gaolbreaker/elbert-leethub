/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    /*
    There's n steps
    Dude takes steps and the total number of steps needs to be n
    at any one time he can take 1 or 2 steps
    need to find out how many possible ways he can get to the top
    e.g.,
    say n is 10 steps
    2 + 2 + 2 + 2 + 2
    1 + 2 + 1 + 2 + 2 +2
    etc.
    
    */
    
    // base case is n = 1
  
    let counter = 0;
    let cache = {1: 1, 2: 2, 3: 3, 4: 5, 22: 28657};
  
    function recurse(stepsRemaining) {
      let returnVal;
      if (cache[stepsRemaining]) {
        returnVal = cache[stepsRemaining];
      } else if (stepsRemaining === 0) {
        returnVal = 1;
      } else if (stepsRemaining === 1) {
        returnVal = recurse(stepsRemaining - 1);
      } else {
        returnVal = recurse(stepsRemaining - 1) + recurse(stepsRemaining - 2);
      }
      return returnVal;
      cache[stepsRemaining] = returnVal;
    }
  
    return recurse(n);
  
    // return counter;
};