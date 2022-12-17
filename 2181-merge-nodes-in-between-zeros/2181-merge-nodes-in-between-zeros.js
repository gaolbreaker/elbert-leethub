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
var mergeNodes = function(head, remainder = 0) {
  if (!head) return null;
  if (!(head.val === 0 && remainder !== 0)) return mergeNodes(head.next, remainder + head.val);
  return new ListNode(remainder, mergeNodes(head.next));
};