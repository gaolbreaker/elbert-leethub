/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  /*
    I: root of a binary tree
    O: boolean, true if tree is a mirror
    C: number of nodes is [1, 1000]
       -100 <= Node.val <= 100
    E: ???
    P: if no children at top level, then 
    
    
    {
      1: [2, 2]
      2: [3, 4, 4, 3]
      3: [5, 6, 7, 8, 8, 7, 6, 5]
    }
    
    
                                    2
                        3                       3
                    4      5               5         4
                null null
  */
  let storage = [];
  // let flag = true;
  
  const populateStorage = (node, level) => {
    
    
    // populate the hashMap
    if (storage[level]) {
      if (node === null) storage[level].push(null);
      else storage[level].push(node.val);
      // storage[level].push(node.val);
    } else {
      if (node === null) storage[level] = [null];
      else storage[level] = [node.val];
    }
    
    if (node === null) return;
    
    // decide if recurse
    // if (node.left === null && node.right === null) {
    //   return;
    // }
    else {
      // recurse
      populateStorage(node.left, level + 1);
      populateStorage(node.right, level + 1);
    }
  }
  
  populateStorage(root, 0);
  console.log(storage);
  // Do something with storage array ... iterate through all, trip flag when asymmetry is found
  for (let i = 1; i < storage.length; i++) {
    // check if the array is a palindrome
    while (storage[i].length > 0) {
      if (storage[i].pop() !== storage[i].shift()) return false;
    }
  }
  
  return true;
  
  // return flag;
  
};