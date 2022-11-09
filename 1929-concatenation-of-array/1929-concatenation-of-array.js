/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const res = [];
    let count = 0;
    while (count < 2) {
        nums.forEach(e => res.push(e));
        count++;
    }
    
    return res;
};