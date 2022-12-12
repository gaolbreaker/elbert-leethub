/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  /*
    I: string
    O: longest palindromic substring
    C: s.length >= 1, s.length <= 1000
    E: s.length = 1
    P:


     babad
     
  */
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (j - i + 1 < longest.length) continue;
      let slice = s.slice(i, j + 1);
      if (slice.length > longest.length && isPalindrome(slice)) longest = slice;
    }
  }
  return longest;
};

var isPalindrome = function(s) {
  let i = 0;
  while (i < s.length / 2) {
    if (s[i] !== s[s.length - 1 - i]) return false;
    i++;
  }
  return true;
}