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
  // second go
  // TC: O(2m + n)
  // SC: O(m)
  let curr = headA;
  let curr2 = headA;
  
  // set a flag on each node in linked list 1
  while (curr) {
    curr.v = true;
    curr = curr.next;
  }
  // reset curr
  curr = headB;
  
  while (curr) {
    if (curr.v) {
      // revert the first linkedList to original state
      while (curr2) {
        delete curr2.v;
        curr2 = curr2.next;
      }
      // return the node that was "visited" before! that's the intersection point!
      return curr;
    } else {
      curr = curr.next;
    }
  }
  
  // first go
  // O(m + n) space complexity
  // O(m + n) time complexity
  
//   if (headA === headB) return headA;
  
//   const arrA = [];
//   const arrB = [];
  
//   let curr = headA;
//   let result = null;
  
//   while (curr) {
//     arrA.push(curr);
//     curr = curr.next;
//   }
  
//   curr = headB;
  
//   while (curr) {
//     arrB.push(curr);
//     curr = curr.next;
//   }

//   while (arrA[arrA.length - 1] === arrB[arrB.length - 1]) {
//     result = arrA.pop();
//     arrB.pop();
//   }
  
//   return result;
  
};