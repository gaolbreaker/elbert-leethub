/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let count = 0;
  let slow = n;
  let fast = n;
  while (true) {
    slow = slow.toString().split('').map((e) => parseInt(e) ** 2).reduce((a, b) => a + b);
    fast = fast.toString().split('').map((e) => parseInt(e) ** 2).reduce((a, b) => a + b);
    if (fast === 1) return true;
    fast = fast.toString().split('').map((e) => parseInt(e) ** 2).reduce((a, b) => a + b);
    if (fast === 1) return true;
    if (slow === fast) return false;
    console.log(slow, fast);
  }
  return false;
};