/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  
  /*
    I: n = number of vertices, array of tuples representing edges, source vertex, destination vertex
    O: boolean, true if valid path exists
    C: at least one vertex, 0 to 100,000 edges, vertex values are 0 to n - 1 inclusive, no loop back, 
     
    E: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2 Output: true
      
    P: 
        preprocess the edges array to create an adjacency list
        visited = [source = 0]
        queue for vertices to process, seed with source vertex
        dequeue
      neighbors of whatever was dequeued, add to queue of shit to process, excluding duplicates,
      queue the neighbors that have NOT been visited or queued yet
      at each loop, is the dequeued node === destination... return true
      when the queue is empty, return false

      visited = [0, 1]
      queue of shit to process = [2]

      0 === 2? no
      1 === 2? no
      2 === 2? yes so return true
  */
  
  // main code below
  // closure variable for adjacency list
  const adjList = [];
  makeAdjacencyList();
  // console.log(adjList);
  
  // preprocessing done, move on to main algorithm
  const visited = [];
  const queue = [source];
  // console.log('source' + source);
  let curr; 
  let count = 0;
  
  while (queue.length > 0) {
    // console.log('queue' + JSON.stringify(queue));
    // console.log('visited' + JSON.stringify(visited));
    curr = queue.shift();
    // console.log(curr);
    
    if (visited.includes(curr)) {
      continue;
    } else visited.push(curr);
    // else continue;
    
    if (curr === destination) return true;
    
    adjList[curr].forEach((e) => {
      // has e been visited?
      // has e been queued?
      if (!visited.includes(e)) {
          queue.push(e);  
      }
    });
    
    // console.log('queue')
    // console.log(queue);
    // console.log('visited: ')
    // console.log(visited)
    // count++;
    // if (count > 10) break;
  }
  return false;
  

  
  
  
  
  
  
  
  
  // helper function to create adjacency list
  function makeAdjacencyList() {
    for (let i = 0; i < n; i++) {
      adjList[i] = [];
    }
    // console.log(adjList);
    
    for (let i = 0; i < edges.length; i++) {
      // deal with left side of 2-tuple
      if (!adjList[edges[i][0]].includes(edges[i][1])) adjList[edges[i][0]].push(edges[i][1]);
      // deal with right side of 2-tuple
      if (!adjList[edges[i][1]].includes(edges[i][0])) adjList[edges[i][1]].push(edges[i][0]);
    }
    // [[1, 2],[0, 2],[1, 0]]
    // console.log(adjList);
    
    // in 2d arrays, make sure you have the [i] there... make sure you're referring to the right level of the array/subarray you know what i mean
  }
  
  /*
   [0, 1, 2].shift() results in [1, 2]
   [1, 2].unshift(0) results in [0, 1, 2]
   DON'T FUCK UP SHIFT and UNSHIFT
   SHIFT <---- [...] removes something from the left
   UNSHIFT ---> [...] adds something to the left
   POP [...] ----> removes something from the right
   PUSH [.....] <---- adds somethign to the right
  
  */
    
};