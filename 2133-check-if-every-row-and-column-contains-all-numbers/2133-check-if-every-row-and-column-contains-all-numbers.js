/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    /*
      Understand: we have an n x n matrix and we want to return false if all rows and columns contain all values 1...n
      Match: quadratic, iterative, arrays
      Plan: 
        pseudocode:
          Example 1:
            // note: 1-indexed
            rows:
              row 1:
                1: false
                2: false
                3: false
            columns:
              column 1:
                1: false
                ...
                n: false
            
            // what follows is actual pseudocode, what is above this is just brainstorming
              iterate across all rows
                for each integer 1 ... n,
                  does the row contain the current integer? if not, return false
              iterate across all columns
                for each integer 1 ... n,
                  does the row contain the current integer? if not, return false
              return false otherwise
            
            ascii playground:
              row [1, 2, 3] 
              integers 1 ... 3
              currInt = 1
              if currInt is not in row, return false
              
      Implement
      Review
      Evaluate
    */
    // console.log(matrix);
    // Note to self! don't confuse 0-indexed with 1-indexed!
  
    // rows
    for (let i = 0; i < matrix.length; i++) { // i = row
      for (let j = 1; j <= matrix.length; j++) { // J is the integer, 1-indexed, and needs to be converted to 0-indexed
        if (!matrix[i].includes(j)) return false;
      }
    }
    
    // columns
    for (let i = 0; i < matrix.length; i++) { // i = column

      
      for (let j = 1; j <= matrix.length; j++) { // J is the integer, 1-indexed, and needs to be converted to 0-indexed
        
        let containsJ = false;
        for (let k = 0; k < matrix.length; k++) { // k is row
          
          if (matrix[k][i] === j) {
            containsJ = true;
            // if we enter this block, that means that column i contains j
          }
        }
        // iterate through column i and 
        if (!containsJ) return false;
      }
    }
  
    return true;
  
    
    
};