/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
  /*
    U
    M
    P
      triple for loop
    I
    R
    E
  */
  let count = 0;
  
  for (let i = 0; i < arr.length -2; i++) {
    for (let j = 1 + i; j < arr.length -1; j++) {
      for (let k = 1 + j; k < arr.length; k++) {
        if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) count++;
      }
    }
  }
  
  return count;
};