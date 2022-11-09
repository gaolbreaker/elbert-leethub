/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  
    // example of prerequisites: [[1,0],[0,1]]
    
    // Initialize data structure to use for adjacency list
    // const adjList = Array.from({length: numCourses}, ()=> []);
    const adjList = new Array(numCourses).fill(0).map(()=> [] )
    // Initialize data structure to use for cycle detection
    const visited = new Set();

    // // Convert the prerequisites array into an adjacency list
    // for (let i = 0; i < numCourses.length; i++) {
    //     adjList[i] = [];
    // }
    
    for (let i = 0; i < prerequisites.length; i++) {
        const dest = prerequisites[i][0];
        const src = prerequisites[i][1];
        adjList[dest].push(src);
    }
    // console.log(JSON.stringify(adjList));
    /*
      [[1],[0]]
      visited: [0, 1]


    */
    // <-- at this point, the adjacency list should be complete

    // We should iterate across/run DFS on all courses in order to account for the possibility of unconnected islands:
    for (let i = 0; i < numCourses; i++) {
        // console.log('line 58')
        if (!dfs(i)) return false; 
    }

    // Define a function to recurse through portions of, or the entire, the graph
    function dfs(course) {
    //   console.log('Course: ', course, '\n', 'Visited: ', visited, '\n','AdjList: ', JSON.stringify(adjList));
      // Two(2) base cases:
      if (visited.has(course)) return false; // <-- cycle detected
      if (adjList[course] === []) return true; // <-- we already know, from previous DFS calls initiated from other vertices, that this course is completable, so we simply return true
      // <-- at this point, we know that the base cases fail in this recursive frame

      visited.add(course); // <-- this is for cycle detection

      // The recursive case (recurse through prereqs of course). False should bubble up.
      for (let node of adjList[course]) { // <-- I forgot the 'let' keyword and it still worked. Investigate WHY. Also, I had switched adjList from an object to an array, so I should have known to switch this from a for...in to a for...of loop!
        //   console.log(`Recursing into ${course}`)
          if (!dfs(node)) return false; // <-- This ensures that False bubbles up. 
      }
      // <-- at this point, we know that course can be completed, but there are two tasks to be completed before we can return true

      visited.delete(course); // <-- since we now know the course can be completed, we remove it from the visited set since its being in the set (for cycle detection) has now served its purpose for this recursive frame
      adjList[course] = []; // <-- we set adjList[course] to empty to signify that it is completable, so work does not have to be reduplicated in other DFS calls
      return true; // <-- finally, we return true
    }



    // <-- at this point, we have determined that there are no unreachable nodes/courses, so we then simply return true
    return true;
};