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
      0 : // takes care of null nodes (e.g., null root)
      root.left && root.right ? 
        1 + Math.min(minDepth(root.left), minDepth(root.right)) : // takes care of 2-child nodes
        1 + (root.left ? minDepth(root.left) : minDepth(root.right)) // takes care of 1-child or 0-child nodes
  );  
};