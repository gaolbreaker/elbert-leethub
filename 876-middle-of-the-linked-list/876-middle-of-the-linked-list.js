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
var middleNode = function(head) {
  const arr = [];
  let current = head;
  while (current !== null) {
      arr.push(current);
      current = current.next;
  }
  if (arr.length % 2 === 0) return arr[arr.length / 2];
  return arr[Math.floor(arr.length / 2)];

};