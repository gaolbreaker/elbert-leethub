/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let i = 0;
  let si;
  let ti;
  let sTyped = [];
  let tTyped = [];
  while (s[i] !== undefined || t[i] !== undefined) {
    si = s[i];
    ti = t[i];
    
    if (si === '#') sTyped.pop();
    else if (si !== undefined) sTyped.push(si);
    if (ti === '#') tTyped.pop();
    else if (ti !== undefined) tTyped.push(ti);
    
    i++;
  }
  console.log(sTyped);
  console.log(tTyped);
  
  if (sTyped.join('') === tTyped.join('')) return true;
  else return false;
};