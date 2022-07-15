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
var inorderTraversal = function(root) {
    let returnVal = [];
  
    function recurse(node) {
      if (node === null) {
        // do nothing
      } else {
        recurse(node.left);
        returnVal.push(node.val);
        recurse(node.right);
      }
    }
  
    recurse(root);
  
    return returnVal;
};