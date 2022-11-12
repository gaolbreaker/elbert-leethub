/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let max = Number.MIN_VALUE;
  let currCustTotal;
  for (let i = 0; i < accounts.length; i++) {
    currCustTotal = 0;
    for (let j = 0; j < accounts[0].length; j++) {
      currCustTotal += accounts[i][j];
    }
    if (currCustTotal > max) max = currCustTotal;
  }
  return max;
};