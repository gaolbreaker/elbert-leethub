/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    /*
      I: array of arrays
      O: number of islands
      C: m == grid.length
         n == grid[i].length
         1 <= m, n <= 300
         grid[i][j] is '0' or '1'.
      E: all 0's? all 1's?
      P:
        declare count variable and set to 0
        iterate through the grid
          if we arrive at a 1, 
            DFS through neighbors and change them to 0
            increment count
        DFS
    */
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        DFS(i, j);
        // console.log(grid);
        count++;
      }
    }
  }
  
  return count;
  
  function DFS(i, j) {

    if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[0].length -1) return;
    if (grid[i][j] === "0") return;
    // first mark grid[i][j]
    grid[i][j] = "0";

    // up
    DFS(i - 1, j);
    // down
    DFS(i + 1, j);
    // left
    DFS(i, j - 1);
    // right
    DFS(i, j + 1);
  }
};