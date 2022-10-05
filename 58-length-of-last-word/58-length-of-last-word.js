/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let lastWord;
  let currWord = '';
  
  var s = s.trim();
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      currWord += s[i];
      if (i === s.length - 1) return currWord.length;
    } else {
      // if (currWord.length > 0) {
      //   lastWord = currWord;
      // }
      currWord = '';
    }
  }
  // return lastWord.length;
  
};