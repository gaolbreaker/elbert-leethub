/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // convert to upper
  s = s.toUpperCase();
  // remove all non-alphanumeric characters
  let arr = [];
  let newS = '';
  let i = 0;
  while (i < s.length) {
    if (/[A-Z0-9]/.test(s[i])) newS += s[i];
    i++;
  }
  s = newS;
  
  let l = 0;
  let r = s.length - 1;
  let status = true;
  
  while(l <= r) {
    if (s[l] === s[r] && l === r) {
      break;
    } else if (s[l] === s[r] && l !== r) {
      l++;
      r--;
    } else {
      status = false;
      break;
    }
  }
  console.log(s);
  return status;
};