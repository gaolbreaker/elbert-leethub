/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // my annotations on a solution found in discussion:
  let start = 0; // we will use this to restrict our window as needed
  let max = 0;
  for (let end = 0; end < s.length; end++) {        // iterate across substring end values from 0 to s.length - 1
    for (let slide = start; slide < end; slide++) { // iterate across window lengths (end - slide) 
      if (s[slide] === s[end]) { // evaluate whether we've found a repeat of s[end] in the current subString
        start = slide + 1; // if so, restrict the sliding window in the next iteration
        break; // 
      }
    }
    if (end - start + 1 > max) max = end - start + 1; // adjust max if needed
  }
  return max; // return max at the end
  
  
  
  /*
    U:
      I: string s
      O: longest substring with no repeating characters
    M:
      Two pointers? Sliding window? Maybe sliding window.
      use a set to track chars currently in current substring
      initialize max with a value of Number.MIN_VALUE
      loop
        add the char at subStringEnd to the set
        if substringEnd reaches a character in the hash map, compare the length of this substring to max
        update max if needed
        move substringStart to e
      return max

      abcabcbb
      s        substring start
         e     substring end
      max = 3
    P
      see above
    I
    R
    E
  */
//   let currSubString = new Set();
//   let max = Number.MIN_VALUE;
//   let start = 0;
//   let end = 0;
//   let length;
  
//   while (start < s.length && end < s.length) {
//     if (currSubString.has(s[end])) {
//       length = end - start;
//       if (length > max) max = length;
//       currSubString.delete(s[start]);
//       start++;
      
//     }
//     currSubString.add(s[end]);
//     end++;
//     console.log(`s: ${start} e: ${end} length: ${length} max: ${max} subString: ${s.slice(start, end)}`)
//   }
//   if (currSubString.size > max) max = currSubString.size;

//   return max;
};