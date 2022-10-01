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
var evaluateTree = function(root) {
  
    /*
      I: root of a binary tree
      O: boolean
      C: number of nodes in the tree is 1 to 1000
         Node.val is 0, 1, 2, or 3 , corresponding to false, true, or, and
         leaf nodes have a val of 0 or 1
         non-leaf nodes have a val of 2 or 3
      E: none?
      
    */
    if (root.left) {
      // case where there are children
      // there should be recursion
      
      // OR
      if (root.val === 2) {
        return evaluateTree(root.left) || evaluateTree(root.right);
      }
      // AND
      if (root.val === 3) {
        return evaluateTree(root.left) && evaluateTree(root.right);
      }
    } else {
      // case where there are no children
      // base case
      return root.val;
    }
};