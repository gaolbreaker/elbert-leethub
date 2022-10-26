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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  
  /*
    step through it:
      Example 1.
      res = ['1->2->5','1->3']
      1->2->5
      1->3
  */
  let res = [];
  const helper = (node, str = '') => {
    // base case
    if (!node.left && !node.right) res.push(str + node.val);
    
    // recursive case(s)
    if (node.left) {
      helper(node.left, str + node.val + '->')
    }
    if (node.right) {
      helper(node.right, str + node.val + '->')
    }
  }
  helper(root);
  return res;
};