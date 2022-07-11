/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  // var sSum = 0;
  // var tSum = 0;
  // for (var i = 0; i < s.length; i++) {
  //   sSum += s.charCodeAt(i);
  // }
  // for (var i = 0; i < t.length; i++) {
  //   tSum += t.charCodeAt(i);
  // }
  // if (sSum !== tSum) return false;
  
  const obj1 = {};
  // replace characters in s to get t
  s.split('').forEach((e, i) => obj1[e] = t[i]);
  const arr1 = [];
  s.split('').forEach((e, i) => arr1.push(obj1[e]));
  
  const obj2 = {};
  // replace characters in s to get t
  t.split('').forEach((e, i) => obj2[e] = s[i]);
  const arr2 = [];
  t.split('').forEach((e, i) => arr2.push(obj2[e]));
  
  return arr1.join('') === t && arr2.join('') === s;
};