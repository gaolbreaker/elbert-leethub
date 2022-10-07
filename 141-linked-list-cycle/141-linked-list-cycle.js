/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head, arr = []) {
  // // unoptimized recursive version, poor space complexity
  // if (head === null) return false;
  // else if (arr.includes(head.next)) {
  //   return true;
  // } else {
  //   arr.push(head.next);
  //   return hasCycle(head.next, arr);
  // }
  
  // unoptimized iterative version
  let curr = head;
  while(curr) {
    curr.val = 'v';
    if (curr.next?.val === 'v') return true;
    curr = curr.next;
  }
  return false;
  
//   //optimized version not using lots of extra storage:
//   function helper(node) {
//     if (node === null) {
//       return false;
//     } else if (node.val === undefined) {
//       return true;
//     } else {
//       return helper(node.next);
//     }
//   }
  
//   return helper(head);
  
};