/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  
  // O(m + n) space complexity
  
  if (headA === headB) return headA;
  
  const arrA = [];
  const arrB = [];
  
  let curr = headA;
  let result = null;
  
  while (curr) {
    arrA.push(curr);
    curr = curr.next;
  }
  
  curr = headB;
  
  while (curr) {
    arrB.push(curr);
    curr = curr.next;
  }

  while (arrA[arrA.length - 1] === arrB[arrB.length - 1]) {
    result = arrA.pop();
    arrB.pop();
  }
  
  return result;
  
};