/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let i = 0;
  let sTyped = [];
  let tTyped = [];
  while (s[i] !== undefined || t[i] !== undefined) {
    
    if (s[i] === '#') sTyped.pop();
    else if (s[i] !== undefined) sTyped.push(s[i]);
    if (t[i] === '#') tTyped.pop();
    else if (t[i] !== undefined) tTyped.push(t[i]);
    
    i++;
  }
  
  if (sTyped.join('') === tTyped.join('')) return true;
  else return false;
};