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
var maxDepth = function(root) {
  /*
    I: root node
    O: integer representing max depth
    C: number of nodes is [0, 10^4]
       -100 <= Node.val <= 100
    E: ???
    P:
      use recursion
      if root is null return 0
      if root is not null, return 1 + greater of the return values of maxDepth of the two child nodes
      
  */
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  // BRB getting somethign to eat too
  // problem is solved
};