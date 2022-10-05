/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  /*
    I: array of strings
    O: string representing "longest common prefix string"
    C: 1 <= strs.length <= 200
       0 <= strs[i].length <= 200
       strs[i] consists of only lowercase English letters
    E: strs.length === 1, return the entire string
    P: 
    
       Example 1
       ["flower", "flow", "flight"]
       
       
  */
  
  // edge case
  // if (strs.length === 1) {
  //   return strs[0];
  // }
  
  let result = '';
  
  const minStrLength = Math.min(...strs.map((e) => e.length));
  for (let i = 0; i <= minStrLength; i++) {
    let commonality = strs.map((e) => e[i]).reduce((a, b) => a === b ? b : false);
    if (commonality) result += commonality;
    else break;
  }
  
  return result;
  
  
};