/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sMap = {};
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]] === undefined || sMap[s[i]] === null) {
      sMap[s[i]] = 1;
    } else {
      sMap[s[i]]++;
    }
  }
  console.log(sMap);
  
  for (let i = 0; i < t.length; i++) {
    if (sMap[t[i]] === undefined || sMap[t[i]] === null) {
      return false;
    } else {
      sMap[t[i]]--;
    }
  }
  console.log(sMap);
  
  for (let letter in sMap) {
    if (sMap[letter] !== 0) return false;
  }
  
  return true;
};