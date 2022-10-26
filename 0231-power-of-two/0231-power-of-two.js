/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  let curr = 1;
  while (curr <= n) {
    if (n === curr) return true;
    curr *= 2;
  }
  return false;
};