/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  const arr = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const res = [];
  let mod26;
  
  while (columnNumber > 0) {
    mod26 = columnNumber % 26;
    res.push(arr[mod26]);
    if (mod26 === 0) columnNumber -= 26;
    else columnNumber -= mod26;
    columnNumber /= 26;
  }
  
  return res.reverse().join('');
  
};