/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            arr[i] = nums[i];
        } else {
            arr[i] = arr[i - 1] + nums[i];
        }
    }
    return arr;
};