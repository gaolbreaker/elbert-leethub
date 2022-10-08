/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  var ransom = ransomNote.split('');
  var mag = magazine.split('');
  var letter;
  var idx;
  
  while (ransom.length > 0) {
    letter = ransom.pop();
    idx = mag.indexOf(letter);
    if (idx > -1) {
      mag.splice(idx, 1);
    } else {
      return false;
    }
  }
  return true;
    
};