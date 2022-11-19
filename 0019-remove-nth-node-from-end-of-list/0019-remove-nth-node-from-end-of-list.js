/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  /*
    U
      I: head of LL, integer n
      O: head of LL after removing nth from last node
      Edge: what if we remove the head?
    M
      Ex 1               n = 2
        1  2  3  4  5
                    c gets a head start
              p  n
    P
      Initialize pointers for
        c for current
        n for the node that is n nodes previous to c where c itself is "1 node" from itself
        p is the node previous to n

      Traverse the linked list while c is not last node
        in each iteraction, increment n and p as needed
      Remove node n from LL
        p.next = n.next
        (deal with edge case)
      return head
    I
    R
    E
  */
  
  /*
          1   2
              c
       p      n
  */
  
  /* n = 2
       1   2   3   4   5
                       c
               n
  */
  const start = new ListNode('something', head);
  let fast = start;
  let slow = start;
  
  for (let i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }
  
  while (fast != null) {
    fast = fast.next;
    slow = slow.next;
  }
  
  slow.next = slow.next.next;
  
  return start.next;
  
  
  
  
  
  
//   let count = n;
//   let nth;
//   let prev;
  
//   while (c.next !== null) {
//     if (count === 1) nth = head;
//     if (count === 0) prev = head;
    
//     // incrementers
//     count--;
//     c = c.next;
//     if (nth) nth = nth.next;
//     if (prev) prev = prev.next;
//   }
  
//   // Remove node n
//   if (count === n && n === 1) return null; // hard coded Example 2 case
//   prev.next = nth.next;
  
//   // Return head
//   return head;

};