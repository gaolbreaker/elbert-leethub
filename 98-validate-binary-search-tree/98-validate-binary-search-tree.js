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
var isValidBST = function(root) {
  /*
    Problem: How do we keep track of ancestors?
    every time we recurse down a level you pass down an array of 
    
                            0
                         /     \
                       -1        
                            
                            root.left.val < root.val && root.right.val > root.val
                            
                            1) null/empty node
                            2) left node
                            2) node with left child ONLY
                            3) node with right child ONLY
                            4) node with both children
                            
                            idea: in order DFS, see if array is sorted
  */
  if (!root.left && !root.right) return true;  
  // let's use helper recursion

  const arr = [];
  
  function helper(node) {
    
    // base case 0, null node
    if (node === null) return;
    // base case 1, leaf node
    // else if (node.left === null && node.right === null) {
    //   arr.push(node.val);
    // }
    
    // recursive case
    else {
      helper(node.left);
      arr.push(node.val);
      helper(node.right);
    }
  }
  
  helper(root);
  
  console.log(arr);
  
  // see if array is sorted
  
  let a = 0, b = 1;
  while (arr[a] < arr[b] && b < arr.length) {
    if (b === arr.length - 1) return true;
    a++;
    b++;

  }
  return false;
  
    
};