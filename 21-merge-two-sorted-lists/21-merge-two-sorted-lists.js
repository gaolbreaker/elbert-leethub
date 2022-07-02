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
    var list1curr = list1;
    var list2curr = list2;
    
    if (list1curr === null) {
        return list2curr;
    } else if (list2curr === null) {
        return list1curr;
    }
    else if (list1curr.val <= list2curr.val) {
        list1curr.next = mergeTwoLists(list1curr.next, list2curr);
        return list1curr;
        // return new ListNode(list1curr.val, mergeTwoLists(list1curr.next, list2curr));
    } else {
        list2curr.next = mergeTwoLists(list1curr, list2curr.next);
        return list2curr;
    }
    
};