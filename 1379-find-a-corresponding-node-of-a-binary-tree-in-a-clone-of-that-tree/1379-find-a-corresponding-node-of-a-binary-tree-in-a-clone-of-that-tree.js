/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  
  
  function recurse(orig, copy) {
    if (orig === null) return false;
    if (orig === target) return copy;
    return recurse(orig.left, copy.left) || recurse(orig.right, copy.right);
  }
  
  return recurse(original, cloned);
  
};