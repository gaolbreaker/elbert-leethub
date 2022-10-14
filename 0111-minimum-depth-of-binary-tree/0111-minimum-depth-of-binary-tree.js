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
 * @return {number}
 */
var minDepth = function(root) {
  return (
    root === null ? 
      0 : 
      root.left && root.right ? 
        1 + Math.min(minDepth(root.left), minDepth(root.right)) :
        1 + (root.left ? minDepth(root.left) : minDepth(root.right))
  );  
};