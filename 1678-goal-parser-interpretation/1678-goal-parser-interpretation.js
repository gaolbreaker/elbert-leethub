/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let i = 0;
  let res = '';
  while (i < command.length) {
    if (command[i] === 'G') {
      res += 'G';
      i++;
    } else if (command[i] + command[i+1] === '()') {
      res += 'o';
      i += 2;
    } else {
      res += 'al';
      i += 4;
    }
  }
  return res;
};