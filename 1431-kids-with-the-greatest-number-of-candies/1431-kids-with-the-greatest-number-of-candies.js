/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  /*
    U
      I: array of integers, integer
      O: array of booleans, where each element is true if e + extraCandies > max
    M
      iterate across array of integers and determine if each element + extraCandies > max
    P
      determine max
      iterate across array
        true if e + x > max
      return array
    I
    R
    E
  */
  const max = Math.max(...candies);
  const res = [];
  for (let e of candies) {
    if (e + extraCandies >= max) res.push(true);
    else res.push(false);
  }    
  return res;
};