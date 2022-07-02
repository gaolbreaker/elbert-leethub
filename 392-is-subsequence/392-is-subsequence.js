/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // IOCE
    // Input: strings s and t
    // Output: boolean true or false is s a subsequence of t
    // Constraints: string s is 100 characters or fewer, string t is 10,000 characters or fewer
    //   s and t are lowercase English letters
    
    // Pseudocode
    // Iterate through s, and map to a new array of objects keeping track of frequency of character in T as well as position
    // Iterate through new array and make sure the position indexes only increase
    // Example 1
    // [ a: [1, 0], b: [1, 2], c: [1, 5] ]
    // Example 2
    // [ []]
    
//     const hashMap = {};
    
//     for (const i = 0; i < s.length; i++) {
//       // get frequency of s[i] in string t
//       let freq = 0;
//       for (const j = 0; t.length; j++) {
//           if (t[j] === s[i]) {
//               freq++;
//           }
//       }
        
//       // for key s[i] of hashMap, set value to tuple with value at index 0 being frequency of s[i] in string t and value at index 1 being position
//       hashMap[s[i]] = [freq, ]
//     }
    if (s.length === 0 || (s.length === 0 && t.length === 0)) {
        return true;
    }
    let jStart = 0;
    
    for (let i = 0; i < s.length; i++) {
        for (let j = jStart; j < t.length; j++) {
            if (s[i] === t[j] && i === s.length -1) {
                return true;
            } else if (s[i] === t[j]) {
                jStart = j + 1;
                break;
            } else if (j === t.length -1) {
                return false;
            }
        }
    }
    
    // otherwise return false
    return false;
};