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
  const token = tokens.pop();
  console.log('Token: ' + token);
  const number = Number(token);
  console.log('Number: ' + number);
  if (number || number === 0) return number;// base case: evaluate whether the token is a number and return it immediately if so
  const operator = tokenToOperator[token];
  const right = evalRPN(tokens); // recurse right side
  const left = evalRPN(tokens); // recurse left side
  console.log(`left: ${left} right: ${right}`)
  return operator(left, right); 
};
