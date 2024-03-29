/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  // console.log(s.length);
  // let arr = s.split('');
  const freq = {};
  for (var i = 0; i < s.length; i++) {
    if (freq[s[i]]) {
      freq[s[i]]++;
    } else {
      freq[s[i]] = 1;
    }
  }
  // console.log(JSON.stringify(freq));
  // // sum freqs
  // var sum = 0;
  // for (const letter in freq) {
  //   sum += freq[letter];
  // }
  // console.log(sum);
  // iterate through the freq object and count the number of even properties
  let numberOfEvens = 0;
  let hasOdds = 0;
  let numberOfOdds = 0;
  for (const letter in freq) {
    if (freq[letter] % 2 === 0) numberOfEvens += freq[letter];
    if (freq[letter] % 2 !== 0) {
      numberOfOdds += freq[letter] - 1;
      hasOdds = 1;
    }
    // if (!(freq[letter] % 2 === 0) && freq[letter] > maxOdds) maxOdds = freq[letter];
  }
  return numberOfEvens + hasOdds + numberOfOdds;
};