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
    // let t_0 = 0;
    // let t_1 = 1;
    // let t_2 = 1;
    // let t_n = 2;
    // const table = [0, 1, 1]
  
  // closure variable 
  const store = {};
  store[0] = 0;
  store[1] = 1;
  store[2] = 2;
  
  let helper = (input) => {
  
    // handle edge cases
    if (input === 0) return 0;
    if (input === 1) return 1;
    if (input === 2) return 1;
    if (store[input]) return store[input];
    
    const result = helper(input - 3) + helper(input - 2) + helper(input - 1);
    store[input] = result;
    return result;
    
  
  }
    
  
  // loop
//     for (let i = 3; i <= n; i++) {
      
//       t_n = t_0 + t_1 + t_2;
//       t_0 = t_1;
//       t_1 = t_2;
//       t_2 = t_n;
//     }
    // for (let i = 3; i <= n; i++) {
    //   table[i] = (table[i - 3] + table[i - 2] + table[i - 1]);
    // }
  
  return helper(n);
  
    
};