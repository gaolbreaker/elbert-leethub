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
  if (head.next === null) return true;
  else {
    const arr = [];
    let curr = head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    // if (JSON.stringify(arr.slice(0, Math.floor(arr.length / 2))) === JSON.stringify(arr.slice(Math.round(arr.length / 2)).reverse())) {
    //   return true;
    // } else return false;
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
      if (arr[i] !== arr[j]) return false;
      else {
        i++;
        j--;
      }
    } 
    return true;
  }
  
};