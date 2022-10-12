/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    
    return n.toString(2).split('').filter(e => e === '1').length;
};