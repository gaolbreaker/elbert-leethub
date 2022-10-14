/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const res = [];
  for (let i = 1; i <= numRows; i++) { // i is the row number
    res[i - 1] = [];
    for (let j = 1; j <= i; j++) { // j is the column number, 1-indexed
      if (j === 1 || i === j) res[i -1][j - 1] = 1; // leftmost and rightmost elements of a row
      else if (j === 2 || j === i - 1) res[i - 1][j - 1] = i - 1;
      else res[i - 1][j - 1] = (res[i - 2][j - 2] + res[i - 2][j - 1]);      
    }
  }
  return res;
};