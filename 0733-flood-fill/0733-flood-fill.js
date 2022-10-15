/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    /*
      I: grid, r coord, c coord, new color
      O: grid
      C: m == image.length number of rows
         n == image[i].length number of columns
         1 <= m there's at least one row
         n <= 50 there's at most 50 columns
         0 <= image[i][j], color < 2^16
         0 <= sr < m
         0 <= sc < n
      E: ??
      Pseudo:
        keep track of visited coords using an arr
        keep track of coords TO VISIT using a QUEUE
        enqueue image[sr][sc] as the seed
        loop while queue.length > 0
          dequeue
          change the value of image[dr][dc] to color
          mark as visited by pushing coords to visited arr
          enqueue unvisited in-bounds neighbors of image[dr][dc]
        return image
        
    */
  const m = image.length;
  const n = image[0].length;
  const originalColor = image[sr][sc];
  // console.log(m, n, originalColor);
  
  let visited = [];
  let queue = [];
  queue.push([sr, sc]);
  while (queue.length > 0) {
    let dequeued = queue.shift();
    image[dequeued[0]][dequeued[1]] = color;
    visited.push(dequeued);
    // console.log('Visited: ' + JSON.stringify(visited));
    
    let north = [dequeued[0] - 1, dequeued[1]];
    let east = [dequeued[0], dequeued[1] + 1];
    let south = [dequeued[0] + 1, dequeued[1]];
    let west = [dequeued[0], dequeued[1] -1];
    
    enqueueIf(north);
    enqueueIf(east);
    enqueueIf(south);
    enqueueIf(west); 
    // console.log('dequeued: ' + JSON.stringify(dequeued));
    // console.log('queue: ' + JSON.stringify(queue));
  }
  
  return image;
  
  function inBounds(tuple) {
    if (tuple[0] >= 0 &&
        tuple[0] < m &&
        tuple[1] >= 0 &&
        tuple[1] < n) return true;
    else return false;
  }
  
  function isVisited(tuple) {
    return visited.filter((e) => e[0] === tuple[0] && e[1] === tuple[1]).length > 0;
  }
  
  function rightColor(tuple) {
    return image[tuple[0]][tuple[1]] === originalColor;
  }
  
  function enqueueIf(tuple) {
    // console.log('Evaluating whether to enqueue: ' + JSON.stringify(tuple));
    if (inBounds(tuple) && rightColor(tuple) && !isVisited(tuple)) {
      // console.log("YES!");
      queue.push(tuple);
    }
  }
  
  
};