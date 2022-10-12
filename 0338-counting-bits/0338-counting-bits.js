/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const ans = [];
  let numberOfOnes;
  let iBinary;
  
  for (let i = 0; i <= n; i++) {
    iBinary = i.toString(2);
    console.log(iBinary);
    numberOfOnes = iBinary.split('').filter((e) => e === '1').length;
    ans.push(numberOfOnes);
  }
  
  return ans;
    
};

/*

2 ** 0 = 1
2 ** 1 = 2    3
2 ** 2 = 4    7
2 ** 3 = 8    15
2 ** 4 = 16   31
2 ** 5 = 32   63
2 ** 6 = 64   127
2 ** 7 = 128  255
2 ** 8 = 256  511
*/