/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  /*
    Input: strings s and t
    Output: boolean, true if s and t are anagrams, false otherwise
    Constraints: 1 <= s.length, t.length <= 5 * 104
                 s and t consist of lowercase English letters.
    Edge Cases:
    Example: 'stop' 'pots'
    Pseudocode:
      O(n^2) solution would be less optimized
      
      
      
      (done) create a hash map for each string to track the frequency of each letter
      (done) iterate across each string to populate the hash maps
      compare the frequencies of the letters in the two hash maps; if they are the same, return true
  */
  
  /*
    hashS = {
      a: 3,
      n: 1,
      g: 1,
      r: 1,
      m: 1,
    } 
    
    hashT = {
      n: 1,
      a: 3,
      g: 1,
      r: 1,
      m: 1,
    }
    
    Input: s = "anagram", t = "nagaram"
    
  
  */
  
  const hashS = {};
  const hashT = {};
  let result = true;
  
  for (let i = 0; i < s.length; i++) {
    // s[i] is a char in the string
    if (!hashS[s[i]]) {
      hashS[s[i]] = 1;
    } else {
      hashS[s[i]]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    // s[i] is a char in the string
    if (!hashT[t[i]]) {
      hashT[t[i]] = 1;
    } else {
      hashT[t[i]]++;
    }
  }
  
  
  Object.keys(hashS).forEach((e) => {
    if (hashT[e] === undefined) {
      result = false;
    }
    else if (hashT[e] !== hashS[e]) result = false;
  });
  
  Object.keys(hashT).forEach((e) => {
    if (hashS[e] === undefined) {
      result = false;
    }
    else if (hashT[e] !== hashS[e]) result = false;
  });
  
  console.log(hashS);
  console.log(hashT);
  
  return result;
  

  // return;
  
  
};