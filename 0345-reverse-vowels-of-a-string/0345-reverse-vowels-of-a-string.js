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
  
  const isVowel = {a: true, e: true, i: true, o: true, u: true};
  const vowels = [];
  let res = ''
  
  for (let i = 0; i < s.length; i++) {
    if (isVowel[s[i].toLowerCase()]) vowels.push(s[i]);
  }
  
  for (let i = 0; i < s.length; i++) {
    if (isVowel[s[i].toLowerCase()]) res += vowels.pop();
    else res += s[i];
  }
  
  return res;
  
};