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
var reverseList = function(head, prev = null) {
  /*
  // IOCE
  // I: head of linked list
  // O: head of linked list, reversed
  // C: number of nodes is [0, 5000], node vales are [-5000, 5000]
  // E: null? 
  // Example 1:
  
  given  1 -> 2 -> 3 -> 4 -> 5 -> null
                              n    p   on
  null<- 1 <- 2 <- 3 <- 4 -> 
  return 5 -> 4 -> 3 -> 2 -> 1
  
  One approach might be to create an array and construct a new linked list and return it. seems inefficient
  Another approach is to traverse the linked list and mutate each node. The last node becomes the head of the LL to be returned
  
  
  */
  
  // attempt at a recursive solution
  // base case
  /*
  if (head === null) {
    return prev;
  } else {
  // recursive case
    // change something
    head.oldNext = head.next;
    head.next = prev;
    // return & recurse
    return reverseList(head.oldNext, head)
  }
  */
  
  // attempt at a iterative solution
  let curr = head;
  let oldNext;
  while (curr !== null) {
    // save the oldNext
    oldNext = curr.next;
    // mutate the current node
    curr.next = prev;
    prev = curr;
    // traverse the LL by changing the curr pointer
    curr = oldNext;
  }
  return prev;
  
};