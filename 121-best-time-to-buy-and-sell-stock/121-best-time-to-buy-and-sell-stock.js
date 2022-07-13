/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var maxProfit = 0;
  var maxPrice = 0;
  var minPrice = 0;
  var currIdx = 0;
  var left = Infinity;
  var curr = prices[currIdx];
  var right = prices[currIdx + 1];
  var needCalcMax = true;
  // is the current element a minimum? if not, continue to next
  // if the current element is a minimum, then find the maximum of the rest of the array
  // if the maximum minus the current element is greater than the memo'd maxProfit, then save it
  // if not,
  while (currIdx < prices.length - 1) {
    if (curr === maxPrice) needCalcMax = true;
    if (curr <= left && curr <= right && !(curr === left & curr === right)) {
      var maxOfRest;
      if (needCalcMax) {
        var restOfArray = prices.slice(currIdx + 1);
        maxOfRest = Math.max(...restOfArray);
        maxPrice = maxOfRest;
        needCalcMax = false;
      }
      if (maxOfRest - curr > maxProfit) maxProfit = maxOfRest - curr;
    }
    // console.log(maxPrice);
    // go to next iteration
    currIdx++;
    left = prices[currIdx - 1];
    curr = prices[currIdx];
    right = prices[currIdx + 1];
  }
  return maxProfit
};
