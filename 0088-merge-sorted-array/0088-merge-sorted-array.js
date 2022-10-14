/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    /*
      [2,   5,   6,   0,   0,   0]     [1,   2,   3]     m = 3    n = 3
       l
                                        r
      
    */
    // if (n === 0) return;
  
    let l = 0;
    let r = 0;
    let temp;
    let addL;
    let shift;
  
    while (l < m && r < n) {
      if (nums1[l] < nums2[r]) {
        l++;
      } else if (nums1[l] >= nums2[r]) {
        addL = 0;
        shift = nums2[r];
        m++;
        while (l + addL < m) {
          temp = nums1[l + addL]; // 2 // 5
          nums1[l + addL] = shift; // 1 // 2
          shift = temp; // 2 // 5
          
          addL++;
        }
        l++;
        r++;
      }
      // console.log(`l: ${l} | r: ${r}`);
      // console.log('nums1: ' + JSON.stringify(nums1));
      // console.log('nums2: ' + JSON.stringify(nums2));
      // console.log(`m: ${m}  | n: ${n}`);
      // console.log('--------------------------------------------');
    }
  
    while (r < n) {
      nums1[l] = nums2[r];
      l++;
      r++;
      // console.log(`l: ${l} | r: ${r}`);
      // console.log('nums1: ' + JSON.stringify(nums1));
      // console.log('nums2: ' + JSON.stringify(nums2));
      // console.log(`m: ${m}  | n: ${n}`);
      // console.log('--------------------------------------------');
    }
};