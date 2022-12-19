/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  /*
    U
      I: string of ASCII characters
      O: boolean, true if a palindrome
    M
      iterate over the string, possibly from both ends
    P
      convert to array
      remove all non-alphanumeric chars from array
        loop through
          if elem is non-alphanumeric, splice it off
          otherwise increment index
      loop, two pointers from each end converge, while l <= size/2
        if l and r not equal, return false immediately
      return true at end
        
      
    'race a car'
         ^
    aba odd, size = 3, 3/2 = 1
      
      
  */
  const set = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
  const arr = s.split('').map(e => e.toLowerCase());
  let i = 0;
  while (i < arr.length) {
    if (!set.has(arr[i])) arr.splice(i, 1);
    else i++;
  }
  i = 0;
  while (i <= Math.floor(arr.length / 2)) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
    i++;
  }
  return true;
  
};