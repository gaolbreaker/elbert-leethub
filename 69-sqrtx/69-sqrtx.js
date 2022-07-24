/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    /*
    just iterate from 1 to x and calculate the square and see if it's x
    for example if x = 10
    1 ^ 2 = 1, 1 < 10, so continue
    2 ^ 2 = 4, 4 < 10, so continue
    3 ^ 2 = 9, 9 < 10, so continue
    4 ^ 2 = 16, 16 > 10, so do something... return i - 1
    */
  if (x === 0) {
    return 0;
  } else if (x === 1) {
    return 1;
  }
  
  for (let i = 1; i <= x; i++) {
    if (i * i > x) {
      return i - 1;
    }
  }
};