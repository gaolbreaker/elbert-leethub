/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length == 2) return new TreeNode(nums[1], sortedArrayToBST(nums.slice(0,1)), null);
  if (nums.length == 1) return new TreeNode(nums[0], null, null);
  if (nums.length > 2) return new TreeNode(nums[Math.floor(nums.length / 2)], 
                               sortedArrayToBST(nums.slice(0, Math.floor(nums.length /2))), 
                               sortedArrayToBST(nums.slice(Math.floor(nums.length / 2) + 1)));
    
};