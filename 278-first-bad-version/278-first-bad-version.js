/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
  
  /*
             b  b
    1. 2  3. 4. 5
    l     m     r
             lm r
            lmr
         b   
    1.   2.   3
    l    m    r
   lmr
  */
    return function(n) {
      let left = 1;
      let right = n; 
      
      while(left <= right) {
        mid = Math.floor((left + right) / 2);
        midResult = isBadVersion(mid);
        if (midResult) { // found a bad ver
          right = mid - 1;
        } else { // DIDN'T find a bad ver, so it's to the right
          if (left === right) { // special case where we're right next to the first bad ver
            return mid + 1;
          } else left = mid + 1;
        }
      }
      return mid;
    };
};