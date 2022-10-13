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
  
  /*
    4 0 1 2 3
    5 0 1 2 3 4
  */

    const arr = [];
    let curr = head;
    let prev = null;
    while (curr) {
      // arr.push(curr.val);
      curr.prev = prev;
      prev = curr;
      curr = curr.next;
    }
    const tail = prev;
    let left = head;
    let right = tail;
    while (left !== right) {
      if (left.val !== right.val) return false;
      left = left.next;
      right = right.prev;
    }
    return true;

    // let i = 0;
    // let j = arr.length - 1;
    // while (i <= j) {
    //   if (arr[i] !== arr[j]) return false;
    //   else {
    //     i++;
    //     j--;
    //   }
    // } 
    // return true;
  
  
};