/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  /*
    t_0 = 0
    t_1 = 1
    t_2 = 1
    t_3 = 2
    
    pseudo:
      seed 3 or whatever 
      loop through biggest seed + 1 through n, at which point you will have t_n calculated, or the precursors needed to calculate t_n
    
  */
  
  // seed
    let t_0 = 0;
    let t_1 = 1;
    let t_2 = 1;
    let t_n = 2;
    const table = [0, 1, 1]
  
  // handle edge cases
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    
  
  // loop
//     for (let i = 3; i <= n; i++) {
      
//       t_n = t_0 + t_1 + t_2;
//       t_0 = t_1;
//       t_1 = t_2;
//       t_2 = t_n;
//     }
    for (let i = 3; i <= n; i++) {
      table[i] = (table[i - 3] + table[i - 2] + table[i - 1]);
    }
  
  return table[n];
  
    
};