/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const digits = String(n).split('').map( char => Number(char));
  return digits.reduce((a, b) => a * b) - digits.reduce((a, b) => a + b);
};