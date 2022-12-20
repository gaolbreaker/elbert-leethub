/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  /*
    I: matrix image
       int    sr
       int    sc
       int    color
    O: matrix image, modified by the flood fill algo in place
    C:
    E:
    P:
      declare a visited array to keep track of squares visited
      obtain the value of the starting pixel, image[sr][sc]
      add starting pixel to visited array
      DFS through nodes 4-directionally connected to image[sr][sc], unless visited
        if the node's color is same as image[sr][sc]'s original color, 
          change to color
          DFS through that node's 4-directionally connected nodes, unless visited  
  */
  
  const visited = [];
  let startColor = image[sr][sc];
  DFS(sr, sc);
  
  function DFS(sr, sc) {
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;
    if (image[sr][sc] !== startColor) return;
    let isVisited = false;
    for (const coords of visited) {
      if (coords[0] === sr && coords[1] === sc) isVisited = true;
    }
    if (isVisited) return;
    visited.push([sr, sc]);
    image[sr][sc] = color;
    DFS(sr + 1, sc);
    DFS(sr - 1, sc);
    DFS(sr, sc + 1);
    DFS(sr, sc - 1);
  }
  
  return image;
  
  
};