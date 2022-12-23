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
  
  function recurse(node) {
    if (!node) return 0;
    const left = recurse(node.left);
    const right = recurse(node.right);
    if (Math.abs(left - right) > 1) {
      flag = false;
      return;
    }
    return 1 + Math.max(left, right);
  }
  
  recurse(root);
  
  return flag;
};