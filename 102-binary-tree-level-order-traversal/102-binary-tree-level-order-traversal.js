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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var accumulator = [];
  function recurse(node, level) {
    var level;
    if (node) {
      if (!accumulator[level]) accumulator.push([]);
      accumulator[level].push(node.val);
      recurse(node.left, level + 1);
      recurse(node.right, level + 1);
    }
  }
  recurse(root, 0);
  return accumulator;
};