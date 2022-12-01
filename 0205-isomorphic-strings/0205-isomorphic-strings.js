/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

  // Driver: Elbert Chan
  // Navigator: Phillip Nguyen
  
  // Pseudo code:
    /*
      create a mask for each string to record the shape of each string
        create an object for each string to keep track of the first occurrence of each char
          s = 'egg'  { e: 0, g: 1}
          t = 'add' { a: 0, d: 1}
          mask(s) = 011
            loop through s
              
          mask(t) = 011
            loop through t
          
          evaluate whether mask(s) === mask(t)

    */
  
  // Solution:
  
    const sMap = {};
    const tMap = {};
    const sArr = s.split('');
    const tArr = t.split('');
    sArr.forEach( (character, index) => {
        if(!sMap[character]) sMap[character] = index;
    });
    tArr.forEach( (character, index) => {
        if(!tMap[character]) tMap[character] = index;
    })
  
    const sMask = sArr.map( char => sMap[char])
    const tMask = tArr.map( char => tMap[char])
    
    return sMask.join('') === tMask.join('');
    
  
    
  
  // Analysis of time and space complexity
  // Feedback on partner's performance
  
  
};