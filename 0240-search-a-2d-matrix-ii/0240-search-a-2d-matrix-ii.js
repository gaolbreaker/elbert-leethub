/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
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

};