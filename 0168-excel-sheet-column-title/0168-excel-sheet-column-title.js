/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  const arr = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const res = [];

  while (columnNumber > 0) {
    res.push(arr[columnNumber % 26]);
    if (columnNumber % 26 === 0) columnNumber -= 26;
    else columnNumber -= columnNumber % 26;
    columnNumber /= 26;
  }
  
  return res.reverse().join('');
  
};