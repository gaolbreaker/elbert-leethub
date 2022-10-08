/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  var ransom = ransomNote.split('');
  var mag = magazine.split('');
  var idx;
  
  while (ransom.length > 0) {
    idx = mag.indexOf(ransom.pop());
    if (idx === -1) {
      return false;
    } else {
      mag.splice(idx, 1); // switched order for time complexity, avoiding the splice if not needed
    }
  }
  return true;
    
};