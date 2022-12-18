/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  /*
    [7, 1, 5, 3, 6, 4]
     ^
     I: array of prices
     O: max profit, number
     C: 1 <= prices.length <= 10^5
        0 <= prices[i] <= 10^4
     E: 
     P: 
      declare a variable, currMax = 0
      iterate through the array for the buy-day
        iterate through the days AFTER the buy day (if any)
          calculate the difference, compare to currMax
            if higher, update currMax
      return currMax
      
      ideas for optimization:
        as you're iterating through, keep track of prev Min, updating prev min if currElem is less
  */
  let currMaxDiff = 0;
  let currMin = prices[0];
  let curr;
  let diff;
  
  /*
    [2, 1, 4]
        ^
     currMin = 2
     curr = 2
     currMaxDiff = 0
  */
  
  for (let i = 0; i < prices.length; i++) {
    curr = prices[i];
    if (curr < currMin) { // update currMin if curr is even less!
      currMin = curr;
      continue;
    }
    diff = curr - currMin;
    if (diff > currMaxDiff) currMaxDiff = diff;
  }
  return currMaxDiff;
};
