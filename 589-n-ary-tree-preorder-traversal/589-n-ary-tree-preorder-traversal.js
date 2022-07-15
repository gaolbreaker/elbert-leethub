/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    var accumulator = [];
    function recurse(node) {
      if (node) {
        accumulator.push(node.val);
        node.children.forEach((e) => {
          recurse(e);
        });
      }
    }
    recurse(root);
    return accumulator;
};