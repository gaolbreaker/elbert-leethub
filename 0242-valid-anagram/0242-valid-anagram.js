/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  /*
    U
      I: two strings, s and t
      O: boolean, true if anagrams, false otherwise
    M: use a hash map to store frequencies
      
    P
      make frequency maps for both strings
      compare the frequency maps
      if doesn't match, return false
    I
    R
    E
    'anagram' 'nagaram'
     a: 3
     n: 1
     g: 1
     r: 1
     m: 1
    
  */
  const freqMapS = {};
  const freqMapT = {}
  for (let i = 0; i < s.length; i++) {
    if (!freqMapS[s[i]]) {
      freqMapS[s[i]] = 1;
    } else {
      freqMapS[s[i]]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!freqMapT[t[i]]) {
      freqMapT[t[i]] = 1;
    } else {
      freqMapT[t[i]]++;
    }
  }
  console.log(freqMapS);
  console.log(freqMapT);
  
  for (const key in freqMapS) {
    if (freqMapS[key] !== freqMapT[key]) return false;
  }
  
  for (const key in freqMapT) {
    if (freqMapS[key] !== freqMapT[key]) return false;
  }
  
  return true;
};