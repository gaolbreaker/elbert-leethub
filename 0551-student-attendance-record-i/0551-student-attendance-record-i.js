/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    /*
      U:
        I: string of A, L, P
        O: true if neither conditions met:
          (1) absent for fewer than 2 days total
          (2) never late for 3 or more CONSECUTIVE days
      M:
        iterate through the string and check for the two conditions
      P:
        totalAbsences = 1
        
        'PPALLL'
             ^
        
        declare var for totalAbsences
        
        iterate over the string
          check for L              
            if previous char === L && curr char === L && next char === L:
              return false
          check for A
            if currChar === A:
              totalAbsences++
            if totalAbsences === 2:
              return false
          check for P
        return true
          
          lCount = 3
          LLPLLL
               ^
    */
    
  let totalAbsences = 0;
  let lCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      if (++lCount === 3) return false;
    }
    if (s[i] === 'A') {
      if (++totalAbsences === 2) return false;
      lCount = 0;
    }
    if (s[i] === 'P') {
      lCount = 0;
    }
  }
  return true;
    
};