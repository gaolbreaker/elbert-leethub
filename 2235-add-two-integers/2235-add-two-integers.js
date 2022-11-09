/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = function(num1, num2) {
  
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
  var xor = num1 ^ num2;
  // console.log(`xor: ${xor}`);
  var carry = (num1 & num2) << 1;
  // console.log(`carry: ${carry}`)
  if (xor & carry) {
    return sum(xor, carry);
  } else {
    return xor ^ carry;
  }
  
};