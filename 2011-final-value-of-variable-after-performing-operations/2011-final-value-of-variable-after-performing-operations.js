/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  const map = {
    'X++': 1,
    '++X': 1,
    'X--': -1,
    '--X': -1
  };
  
  return operations.map(e => map[e]).reduce((a,b) => a + b);
};