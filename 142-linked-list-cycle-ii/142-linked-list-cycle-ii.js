/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

  // pos = index of node that tail's next is pointed to
  // how do we know that we are at the tail node?

  // "base case" of Example 3,

  // return boolean if argument exists in arrayOfNodes

  var current = head;
  if (current === null) return null;
  var pos = 0;
  var collectionOfNodes = {};

  // is the node in the array? return true if node.val or node.next are the same as something in the array before
  function nodeInCollection(node) {
    let hasMatch = false;
    collectionOfNodes[node.val]?.forEach((el) => {
        // console.log('el: ', el);
        // console.log('node: ', node);
        // console.log('el === node: ', el === node);
        if (el === node) {
            hasMatch = true;
        }
    });
    return hasMatch;
  }

  while (pos !== -1) {
      if (collectionOfNodes[current.val]) {
        collectionOfNodes[current.val].push(current);
      } else {
        collectionOfNodes[current.val] = [current];
      }


      if (current.next === null) {
          pos = -1;
          return null;
      } else if (nodeInCollection(current.next)) {
          return current.next;
      } else {
          pos++;
          current = current.next;
      }
      console.log(pos);
  }

  return null;

};

