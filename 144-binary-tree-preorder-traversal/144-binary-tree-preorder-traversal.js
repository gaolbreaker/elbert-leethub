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
var preorderTraversal = function(root) {
  
  var arr = [];
  
  function recurse(node) {
    // base case
    if (node === null) return;
    // recursive case    
    else {
      arr.push(node.val);
      recurse(node.left);
      recurse(node.right);
    }
  }
  
  recurse(root);
  
  return arr;

    
};