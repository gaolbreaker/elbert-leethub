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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (root === null) return [];
  
  let arr = [];
  
  function recurse(node) {
    // base case
    if (node === null) return;
    
    else {
      // recursive case
      recurse(node.left);
      recurse(node.right);
      arr.push(node.val);
    }
  }
  
  recurse(root);
  
  return arr;
  
    
};