/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    /*
      I: a string containing characters for parentheses, squiggly brackets, and square brackets
      O: boolean, true if valid
      C: 1 <= s.length <= 10^4
         s consists of parentheses only '()[]{}''
      E: ???
      
      Example 1: '()' 
        left parenthesis in position 1 and there is a closing parenthesis afterwards somewhere, so returns true
      Example 2: '()[]{}'
        each left parenthesis eventually is closed by a corresponding right parenthesis
      Example 3: '(]'
        left round parenthesis is not closed by a right round parenthesis
        so returns false
        
      Algorithm ideas:
        -Count # of left round parentheses. Should correspond with number of right round parentheses
        Example 2: '(][){}'
      Pseudocode:
        declare an array for our stack
        iterate through the string
          if left parenthesis is found, push the character to the stack
          if right parenthesis found, assess whether stack contains corresponding left parenthesis, if not, return false
            if yes, pop off the stack
      
    */
    // if (s.length === 1) return false;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
       if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
         stack.push(s[i])
       }
       if (s[i] === ')') {
         if (stack.pop() !== '(') return false;
       }
       if (s[i] === ']') {
         if (stack.pop() !== '[') return false;
       }
       if (s[i] === '}') {
         if (stack.pop() !== '{') return false;
       }
    }
    if (stack.length === 0) return true;
    else return false;
    
};