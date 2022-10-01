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
var isBalanced = function(root) {
  
  let flag = true;
  
  // edge case
  if (root === null) return true;
  
  // returns height
  function helper(node) {
    // is null; base case
    if (node === null) return 0;
    
    let left = helper(node.left);
    let right = helper(node.right);
    

    
    if (Math.abs(left - right) > 1) flag = false;
    
    // has children
    if (node.left  || node.right ) {
      return 1 + Math.max(left, right);
    } else return 1;
    // return 1 + Math.max(left, right);
  }
  
  helper(root);
  
  return flag;
    
};

/*
                    1
               2      2
              3 n    n  3
            4 n        n 4

*/