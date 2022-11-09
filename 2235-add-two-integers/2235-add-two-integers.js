/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = function(a, b) {
  
  /*
  
    step through sum(13, 11):
    
      1101 = 13
      1011 = 11
      xor =                0110
      carry = 1001 << 1 = 10010
      &                   00010
       0110
      10010
      xor =                10100
      carry = 00010 << 1 = 00100
      &                    00100
      10100
      00100
      xor =                10000
      carry = 00100 << 1 = 01000
      &                    00000
      ^                    11000 = 24
    
  */
  var x = a ^ b;
  // console.log(`xor: ${xor}`);
  var c = (a & b) << 1;
  // console.log(`carry: ${carry}`)
  if (x & c) {
    return sum(x, c);
  } else {
    return x ^ c;
  }
  
};