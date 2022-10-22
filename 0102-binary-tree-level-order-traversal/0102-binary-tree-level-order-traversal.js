/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  /*
    Input: root of a binary tree
    Output: array representing level order traversal of the binary tree, with the elements of said array being the values in the nodes
    Constraints: 0 nodes to 2000 nodes inclusive
                 -1000 <= Node.val <= 1000
    Edge Case: 0 nodes
    Pseudo: 
      declare results array
      declare a queue variable to keep track of what still "needs to be look processed"
      seed the queue with the root node
      create a while loop to process the contents of the queue, on the condition that the queue is NOT empty
        dequeue from the queue [btw, unshift = ADDING --> to the left, and shift is REMOVING <-- from the left]
        assign to variable
        push the val of the dequeued node to the results array
        enqueue the children of the dequeued node
      return the results array
  */
  
  const results = [];
  const queue = [[root, 0]];
  let curr;
  let level;
  
  // idea: use index of results array to represent level
  
  /*
  
                            3
                    9             20
                              15        7
                              
                   results = [3]
                   queue = [9, 20]
                   curr = 3;
  
  */
  
  // note to self: deal with null children and nodes!
  
  while (queue.length > 0) {
    const [curr, level] = queue.shift(); // [node, 0]
    if (curr !== null) {
      // console.log(`curr: ${JSON.stringify(curr)}`);
      if (results.level === undefined) results.push([]);

      results[level].push(curr.val);

      queue.push([curr.left, level + 1]);
      queue.push([curr.right, level + 1]);
    }    
  }
  // console.log(results);
  return results.filter((e) => e.length > 0);
};