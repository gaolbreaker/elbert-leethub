/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let currMaxDiff = 0;
  let currMin = prices[0];
  let diff;
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < currMin) {
      currMin = prices[i];
      continue;
    }
    if (prices[i] - currMin > currMaxDiff) currMaxDiff = prices[i] - currMin;
  }
  
  return currMaxDiff;
};
