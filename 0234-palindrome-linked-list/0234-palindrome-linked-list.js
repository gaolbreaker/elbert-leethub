/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  
  // version without arrays. mutates singly linked list to doubly linked list

  let curr = head;
  let prev = null;
  while (curr) {
    curr.prev = prev;
    prev = curr;
    curr = curr.next;
  }

  curr = head;

  while (curr !== prev) {
    if (curr.val !== prev.val) return false;
    curr = curr.next;
    prev = prev.prev;
  }
  return true;
};