/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const words = [];
  let currWord = '';
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      currWord += s[i];
      if (i === s.length - 1) words.push(currWord);
    } else {
      if (currWord.length > 0) {
        words.push(currWord);
      }
      currWord = '';
    }
  }
  return words.pop().length;
  
};