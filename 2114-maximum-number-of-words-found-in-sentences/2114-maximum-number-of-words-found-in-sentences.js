/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  
  /*
    'sdlkfj'
    'lksjdflkj sdfskldjf'
    
  */
  
  let max = Number.MIN_VALUE;
  let wordsInCurrSentence;
  for (let i = 0; i < sentences.length; i++) {
    wordsInCurrSentence = 1;
    for (let j = 0; j < sentences[i].length; j++) {
      if (sentences[i][j] === ' ') wordsInCurrSentence++;
    }
    if (wordsInCurrSentence > max) max = wordsInCurrSentence;
  }
  return max;
    
};