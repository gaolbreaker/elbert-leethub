/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  /*
    I: two root nodes
    O: boolean, true if the two binary trees are structurally identical and nodes have the same value
    C: #nodes in both trees is 0 to 100
       -10^4 <= Node.val <= 10^4
    E: 0 nodes in a tree
    
    Ideas: recursion
           account for 0 nodes
  */
  if (p === null && q === null) {
    return true;
  } else if ((p === null && q !== null) || (q === null && p !== null)) {
    return false;
  } else if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  } else if (p.val !== q.val) {
    return false;
  }
    
};