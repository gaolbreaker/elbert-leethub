/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    /*
      Note: look at variation on this problem where there may be overlap between each of the rows, 
      that makes the problem a little bit harder
      
      U
        I: matrix of sorted integers, target integer
           m is number of rows
           n is number of columns
        O: boolean, does it exist in matrix?
        C: 1 <= m, n <= 100
           -10^4 <= matrix[i][j], target <= 10^4
        E:
      M: binary search
         low = top left
         high = bottom right
         then
      P
        Evaluate whether target is within the bounds of the matrix
        Run binary search vertically
          take a column convert 
          Determine low, mid, high
        Run binary search horizontally
      I
      R
      E
    */
  
  
  for (let i = 0; i < matrix.length; i++) {
    // console.log(matrix[i]);
    if (binarySearch(matrix[i], target)) return true;;
  }
  return false;
  
  
  function binarySearch(arr, num) {
    // arr is a sorted array
    // return value is whatever row it is in
    /*
      [1, 6, 10, 15, 23]
                  l  
              m    
                      h
      low = 0
      high = 2
      mid = 1
      num = 15


    */
    let low = 0; // these should be the indices
    let mid;
    let high = arr.length - 1;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (num < arr[mid]) { // left of mid // 15 < 10 ? No.
        // we should go to the left side
        high = mid - 1;
      } else if (num > arr[mid]) { // 15 > 10 ? Yes
        low = mid + 1;
      } else if (num === arr[mid]) return true; // target condition
    }
    return false;
  }

  // console.log(binarySearch([1,6,10,15,23],7));
};