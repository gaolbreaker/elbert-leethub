/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  /*
    what is a bijection???
    U
      I: string pattern, string s (a bunch of words)
      O: boolean, true if s matches pattern specified in pattern
    M: 
      declare hash map variable, key = char in pattern, values = word in the string
      {
        'a': 'dog',
        'b': 'cat',
      }
      loop through pattern and words simulatenously
        if letter exists in hash map, take value in hash corresponding to letter and compare it to current word in string
          if not equal, return false
        if letter does NOT exist in hash map, add it, value = current word in string   
    P
    I
    R
    E
  */
  
  /*
    s = 'abba'.split = ['a', 'b', 'b', 'a'] <-- words
    pattern = 'baab'
    patternToWord = {}
    wordToPattern = {}
    i = 0
    letter
    currWord
    currLetter
    
  */

  const words = s.split(' ');
  if (words.length !== pattern.length) return false;
  
  const patternToWord = {};
  const wordToPattern = {}; // bijection check
  let i = 0;
  let letter;
  let currWord;
  let currLetter;
  while (i < words.length) {
    currLetter = pattern[i];
    currWord = words[i];
    if (!patternToWord[currLetter] && !wordToPattern[currWord]) {
      patternToWord[currLetter] = currWord;
      wordToPattern[currWord] = currLetter;
    } else {
      if (patternToWord[currLetter] !== currWord) return false;
      if (wordToPattern[currWord] !== currLetter) return false;
    }
      
    i++;
  }
  
  return true;
  
};