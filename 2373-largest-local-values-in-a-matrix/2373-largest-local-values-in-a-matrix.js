/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
  /*
    Understanding
      Input: n x n integer matrix called grid
      Output: integer matrix maxLocal of size (n - 2) x (n - 2) 
    Match: 
      new matrix max local
      for
        for
          for
            for
    Plan:
      initialize maxLocal matrix, size (n - 2) x (n - 2)
      
      loop through the rows < n -2
        loop through the columns < n -2
          initialize a variable to keep track of max
          loop through rows of submatrix
            
            loop through columns of submatrix
              evaluate if current val > max, if so assign it to max
          set maxLocal[i][j] to max
    Implement:
              

  */
  // console.log(grid);
  const n = grid.length;
  let max;
  let curr;
  const maxLocal = new Array(n-2).fill(0).map(()=>[])
  // console.log(maxLocal);
  
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      max = Number.MIN_VALUE;
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          curr = grid[i+k][j+l]
          if (curr > max) max = curr;
        }
      }
      maxLocal[i][j] = max;
    }
  }
  return maxLocal;
};