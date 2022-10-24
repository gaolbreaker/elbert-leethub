/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  
  /*
    [7,  7,  7,  7]
         h
     c
   p  
     [1, 2, 2, 1]
      h
      c
      p
  */
  
  
  if (!head) return head;
  let curr = head;
  let prev = null;
  while (curr) {
    if (curr.val === val && prev) {
      prev.next = curr.next; 
      curr = prev;
    } else if (curr.val === val && head === curr) {
      head = curr.next;
      curr = null;
    }
    prev = curr;
    
    if (curr) curr = curr.next;
    else curr = head;
  }
  return head
};