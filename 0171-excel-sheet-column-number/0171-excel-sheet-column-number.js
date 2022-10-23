/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  /*
    Input: string representing column in excel
    Output: number representing column number, 1-indexed
    Constraints: 1 <= columnTitle.length <= 7
                 upper case English letters ONLY
                 range ["A", "FXSHRXW"]
    Edge Cases:
    Pseudocode:
      Example 2:
        "AB"
          2 * 26 ^ 0 + 1 * 26 ^ 1
         length 2
      
      declare a variable curr, initialized to the length of the string less one, representing the final index of the string
      declare a variable power, initialized to zero
      declare a result variable, a number, initialized to zero
      loop on the condition that curr is within the bounds of the string
        convert the char at index curr of the string to a number, A = 1, etc., 
        multiply the number by 26 raised to the power of the variable power and add the result to the result variable
        increment power by 1
        decrement curr by 1
      return the result variable
      
      x x x x
      0 1 2 3 curr
      3 2 1 0 power = Math.abs(curr - 3)
  */
  
  let curr = columnTitle.length - 1;
  let result = 0;
  
  while (curr >= 0) {
    result += (columnTitle[curr].charCodeAt() - 64) * (26 ** Math.abs(curr - (columnTitle.length - 1)));
    curr--;
  }
  
  return result;
};