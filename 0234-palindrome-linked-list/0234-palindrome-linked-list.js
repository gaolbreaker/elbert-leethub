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
  if (head.next === null) return true;
  else {
    const arr = [];
    let curr = head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
    if (JSON.stringify(arr) === JSON.stringify(arr.reverse())) {
      return true;
    } else return false;
  }
  
};