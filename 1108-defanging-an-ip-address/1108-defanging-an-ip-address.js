/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.split('').map(e => e === '.' ? '[.]' : e).join('');
  
  // let res = '';
  // for (let i = 0; i < address.length; i++) {
  //   if (address[i] === '.') res += '[.]';
  //   else res += address[i];
  // }
  // return res;
  
};