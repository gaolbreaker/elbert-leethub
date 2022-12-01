/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const tokenToOperator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b), // "truncate toward 0"
    "*": (a, b) => a * b
  };
  
  function recurse() {
    const token = tokens.pop();
    const number = Number(token);
    if (number || number === 0) return number;// base case: evaluate whether the token is a number and return it immediately if so
    const operator = tokenToOperator[token];
    const right = recurse(); // recurse right side
    const left = recurse(); // recurse left side
    return operator(left, right); 
  }
  
  return recurse();
};

// Reminder: 0 is falsy!