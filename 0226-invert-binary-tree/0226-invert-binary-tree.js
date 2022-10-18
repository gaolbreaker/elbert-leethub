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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    /*
      I: root of a binary tree
      O: root of the binary tree, "inverted"
      C: The number of nodes in the tree is in the range [0, 100].
         -100 <= Node.val <= 100
      E: empty binary tree
      Pseudocode:  
                  4
               2      7
             1  3    6  9
        
      
      Repeat
      Example
      Approach
      Code
      Test
      Optimize
    */
  
  // base case
  if (root === null) return root;
  if (root.left === null && root.right === null) {
    return root;
  }
  
  //swap
  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  
  // recursive case
  return root;
  
};