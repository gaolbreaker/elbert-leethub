/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // create an array of nodes
  const arr = [];
  function fillArray(head) {
      if (head) {
        arr.push(head);      
        if (head.next) {
          fillArray(head.next);
        }
      }
  }
  fillArray(head);
  
  // reversal
  // initial value of current
  let current = null;
  let newHead = null;
  // [1, 2, 3, 4, 5]
  // while array is non-zero in length, loop
  while (arr.length > 0) {
    // if current is null, set current to the popped element
    if (current === null) {
        current = arr.pop();
        newHead = current;
    } else {
        current.next = arr.pop();
        current = current.next;
        if (arr.length === 0) {
          current.next = null;
        }
    }
  }
  
  return newHead;
};