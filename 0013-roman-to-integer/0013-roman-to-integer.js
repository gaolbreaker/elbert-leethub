/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

  const r2i = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  return s
           .split('')
           .reverse()
           .map(e => r2i[e])
           .reduce( (a, b, i, arr) => 
             b < arr[i - 1] ? a - b : a + b
          );
};