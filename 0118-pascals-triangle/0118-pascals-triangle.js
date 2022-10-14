/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = new Array(numRows);
  for (let i = 1; i <= numRows; i++) { // i is the row number
    result[i - 1] = [];
    for (let j = 1; j <= i; j++) { // j is the column number, 1-indexed
      if (j === 1 || i === j) result[i -1][j - 1] = 1; // leftmost and rightmost elements of a row
      else result[i - 1][j - 1] = (result[i - 2][j - 2] + result[i - 2][j - 1]);      
    }
  }
  return result;
};