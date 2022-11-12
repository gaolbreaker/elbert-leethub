/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    /*
      Understand: 
        Input: string jewels, string stones
          each char in jewels is a unique "jewel"
          jewel is a subset of stones
        Output: number representing jewels in stones
          How many jews are in stones?
      Match: 
        // loop through stones string jewels.length times
        // nested loop, outer loop is jewels
        Actually, just use sequential loops with a hash map
      Plan
        loop through jewels to populate hash map
        loop through stones and increment count var
        return count var
      Implement
        
    */
  
  const hash = {};
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    hash[jewels[i]] = 0;
  }
  // at this point, the hash map should have k:v pairs representing "jewels" with values at 0
  for (let i = 0; i < stones.length; i++) {
    if (hash[stones[i]] !== undefined) count++; // 0 was giving a falsy
  }
  return count;
  
};