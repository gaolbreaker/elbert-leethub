/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
  /*
    6
    6 % (2 ** 1) 
  */
  if (n === 0) return false;
  
  let twoExponent = 0;
  let threeExponent = 0;
  let fiveExponent = 0;
  while (n % (2 ** (twoExponent + 1)) === 0) {
    twoExponent++; 
  }
  while (n % (3 ** (threeExponent + 1)) === 0) {
    threeExponent++; 
  }
  while (n % (5 ** (fiveExponent + 1)) === 0) {
    fiveExponent++; 
  }
  // console.log(twoExponent, threeExponent, fiveExponent);
  
  const cleanedOut = n / 2 ** twoExponent / 3 ** threeExponent / 5 ** fiveExponent;
  return cleanedOut === 1 ? true : false;
  
  
};