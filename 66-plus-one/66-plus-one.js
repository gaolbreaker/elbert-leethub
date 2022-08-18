/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // increment the last element
  digits[digits.length - 1]++;
  // iterate across the array backwards to carry any 1's that need carrying
  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i] === 10) {
      digits[i] = 0;
      digits[i - 1]++;
    }
  }
  if (digits[0] === 10) {
    digits[0] = 0;
    digits.unshift(1);
  }
  return digits;
};

// this is a lot more complicated than it seems at first glance
// how do you deal with 999? maybe first increment the last digit. Then iterate across the array backwards to "carry" any 1's