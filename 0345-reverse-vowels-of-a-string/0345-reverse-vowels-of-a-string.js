/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  /*
    U: reverse order of vowels in string s
      apple -> eppla
    M: multiple passes through string, create new array to store reversed vowels
       use pop/push to avoid .reverse()
    P
      Build an isVowel map
      Initialize an array to store vowels, vowels
      Iterate through string s and push any vowels to vowels array
      Initialize a results string
      Iterate across string s again
        += vowels.pop() if the curr char is a vowel
        += to the results string if curr char is a consonant
      return results string
    I
    R
    E
  */
  
  const isVowel = new Set('aeiouAEIOU'); // Set() constructor takes an iterable
  const vowels = []; // if all vowels, then extra O(n) memory here
  let res = '' // extra O(n) memory? Ignored because it's the output
  
  // console.log('Before first for loop:' + vowels);
  for (let char of s) {
    if (isVowel.has(char)) vowels.push(char);
  }
  // console.log('After first for loop:' + vowels);
  
  for (let char of s) {
    if (isVowel.has(char)) res += vowels.pop();
    else res += char;
  }
  // console.log('After second for loop:' + vowels);
  
  return res;
  
};