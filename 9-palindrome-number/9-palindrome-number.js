/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  let string = x.toString();
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString === string;
};