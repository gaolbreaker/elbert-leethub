/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  
  function returnPath(node, target, arr = []) {
    if (node.val === target.val) {
      arr.push(target.val);
      return arr;
    } else if (node === null) {
      return arr;
    } else if (target.val < node.val) {
      arr.push(node.val);
      return returnPath(node.left, target, arr);
    } else if (target.val > node.val) {
      arr.push(node.val);
      return returnPath(node.right, target, arr);
    }
  }
  
  const pPath = returnPath(root, p);
  const qPath = returnPath(root, q);

  let i = 0;
  while (pPath[i] === qPath[i]) {
    i++;
  }

  return new TreeNode(pPath[i - 1]);
  
};