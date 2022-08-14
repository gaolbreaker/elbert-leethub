/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  /*
    s is an array
    modify in place
    Input: an array of chars
    Output: nothing? return it?
    Constraints: s.length 1 to 100,000
    Edge Cases: s.length = 1, don't need to do anything
    Assumption: all lower-case English letters
               l       r
    odd #["h","e","l","l","o"]
    
                    r   l
    even #["H","a","n","n","a","h"]
    
    pseudo:
      set left pointer = array[0]
      set right pointer = array[array.length - 1]
      while loop -- l < r
        swap the values
        left pointer += 1
        right pointer -= 1
      return ?
  */
  
  let left = 0;
  let right = s.length - 1; //left and right are the INDEXES, don't confuse =yourself
  
  while (left < right) {
    let tempLeft = s[left];
    s[left] = s[right];
    s[right] = tempLeft;
    // [s[left], s[right]] = [s[right], s[left]]; // ES6 destructuring
    left += 1;
    right -= 1;
  }
  
  // return s;
};