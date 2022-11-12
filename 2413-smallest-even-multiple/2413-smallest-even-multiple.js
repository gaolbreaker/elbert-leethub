/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  let multiple = 1;  
  while ((n * multiple) % 2 !== 0) {
    multiple++;
  }
  return multiple * n;
};