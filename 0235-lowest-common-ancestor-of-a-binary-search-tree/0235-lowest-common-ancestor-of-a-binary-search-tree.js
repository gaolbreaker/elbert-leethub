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
  /*
    I:  root of a BST, 
        p node
        q node
    O:  LCA node
    
    P:
      if root is not p or q, we traverse
      if root is p or q
        we need to determine if the other is in .left or .right
    
    need a way to determine if currNode is 
    just use equality
    
    function 
  */
  if (!root) return null;
  if (root === p) {
    if (contains(root.left, q) || contains(root.right, q)) return root;
     
  }
  if (root === q) {
    if (contains(root.left, p) || contains(root.right, p)) return root; 
  }
  if (contains(root.left, p) && contains(root.right, q)) return root;
  if (contains(root.left, q) && contains(root.right, p)) return root;
  
  return lowestCommonAncestor(root.left, p, q) || lowestCommonAncestor(root.right, p, q);
  
  
};

function contains(root, node) { // returns true or false
  // base case
  if (!root) return false;
  // recursive case
  if (root === node) {
    return true;
  } else {
    return contains(root.left, node) || contains(root.right, node);
  }
}