/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [];
  for (let i = 1; i <= numRows; i++) { // i is the row number
    temp = [];
    for (let j = 1; j <= i; j++) { // j is the column number, 1-indexed
      console.log(i, j);
      console.log(result)
      if (j === 1 || i === j) temp.push(1); // leftmost and rightmost elements of a row
      else temp.push(result[i - 2][j - 2] + result[i - 2][j - 1]);      
      
    }
    result.push(temp);
    
  }
  return result;
};