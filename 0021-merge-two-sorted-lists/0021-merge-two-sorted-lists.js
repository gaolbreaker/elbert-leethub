/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  /*
    U
      I: heads of two sorted lists
      O: head of the merged sorted list
    M
      curr variable for curr node of results linked list
      maintain reference to head of results linked list
      
      two curr variables
      iterate over the lists
        within each loop, evaluate which curr.val is smaller
          add a new node with that curr.val to the results linked list
          traverse to next node on the linked list with the smaller curr.val
    P
      
      
  */
  
  /*
    Example 1
    
    [1,1, 2, 3,4, 4 ]
    
    [1 ,   2 ,   4 ]
                     c1
    [1 ,   3 ,   4 ]
                     c2
  */
  
  // edge cases:
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  
  // general case:
  let resHead = null;
  let resCurrent = resHead;
  let c1 = list1;
  let c2 = list2;
  
  while (c1 && c2) {
    if (c1.val < c2.val) {
      if (!resHead) {
        resHead = new ListNode(c1.val);
        resCurrent = resHead;
      } else {
        resCurrent.next = new ListNode(c1.val);
        resCurrent = resCurrent.next;
      }
      c1 = c1.next;
    } else {
      if (!resHead) {
        resHead = new ListNode(c2.val);
        resCurrent = resHead;
      } else {
        resCurrent.next = new ListNode(c2.val);
        resCurrent = resCurrent.next;
      }
      c2 = c2.next;
    }
  }
  // add the rest of c1 or c2
  while (c1) {
    if (resCurrent) resCurrent.next = new ListNode(c1.val)
    else {
      resHead = new ListNode(c1.val); // head is moving with current
      resCurrent = resHead;
    }
    resCurrent = resCurrent.next;
    c1 = c1.next;
  }
  while (c2) {
    if (resCurrent) resCurrent.next = new ListNode(c2.val)
    else {
      resHead = new ListNode(c2.val);
      resCurrent = resHead;
    }
    resCurrent = resCurrent.next;
    c2 = c2.next;
  }
  return resHead;
};