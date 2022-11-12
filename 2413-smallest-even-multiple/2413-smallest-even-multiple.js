/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  let k = 1;  
  while ((n * k) % 2 !== 0) {
    k++;
  }
  return k * n;
};