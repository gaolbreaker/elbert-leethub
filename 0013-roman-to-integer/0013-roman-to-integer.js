/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    /*
      I: string representing a roman numeral
      O: integer
      C: 1 <= s.length <= 15, only i through m, s is a valid roman numeral in the range [1, 3999]
      E: ???
    */
    // let curr = 0;
    // let result = 0;
    // while (curr < s.length) {
    //   let skip = false;
    //   if (s[curr] === 'M') {
    //     result += 1000;
    //   } else if (s[curr] === 'D') {
    //     result += 500;
    //   } else if (s[curr] === 'C') {
    //     if (s[curr + 1] === 'D') {
    //       result += 400;
    //       skip = true;
    //     } else if (s[curr + 1] === 'M') {
    //       result += 900;
    //       skip = true;
    //     } else result += 100;
    //   } else if (s[curr] === 'L') {
    //     result += 50;
    //   } else if (s[curr] === 'X') {
    //     if (s[curr + 1] === 'L') {
    //       result += 40;
    //       skip = true;
    //     } else if (s[curr + 1] === 'C') {
    //       result += 90;
    //       skip = true;
    //     } else result += 10;
    //   } else if (s[curr] === 'V') {
    //     result += 5;
    //   } else if (s[curr] === 'I') {
    //     if (s[curr + 1] === 'V') {
    //       result += 4;
    //       skip = true;
    //     } else if (s[curr + 1] === 'X') {
    //       result += 9;
    //       skip = true;
    //     } else result += 1;
    //   }
    //   if (skip) curr++;
    //   curr++;
    // }
    // return result;
    const r2i = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    }
    //ba

    console.log( s.split('').reverse() )
    console.log( 
      s.split('').reverse().map((e) => r2i[e])
      )
    return ( 
      s.split('').reverse().map((e) => r2i[e]).reduce((a, b, i, arr) => (
      b < arr[i - 1] ? a - b : a + b
    ))
      )
};