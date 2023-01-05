/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    /*
      I: integer n
         integer k
      O: all possible combinations of k numbers from range [1, n]
         order does not matter
      C: 1 <= n <= 20
         1 <= k <= n
      E:
    */
  
  /*
    "slate"
    n = 4 k = 2
    [1, 2, 3, 4]
        i
     slate = [1] 
    1 
  */
  /*
  results = [[1, 2], [1, 3]]
                    [] i = 1
                  /                 \            \        \ 
                [1]                  [2]          [3]      [4]
              /  |      \           /   \          /
          [1, 2] [1, 3] [1, 4]    [2, 3] [2, 4]   [3, 4]
  */
  
  const results = [];
  
  function helper(slate, i) {
    // base case
    if (slate.length === k) {
      results.push(slate.slice());
      return;
    }
    // recursive case
    for (let j = i; j <= n; j++) {
      slate.push(j); // [1, ]
      helper(slate, j + 1);
      slate.pop();
    }
  }
  
  helper([], 1); // 
  
  return results;
  
};