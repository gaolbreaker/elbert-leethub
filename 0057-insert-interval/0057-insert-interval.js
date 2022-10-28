/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  
    /* Elbert's analysis of comments on and learnings from a posted solution
      // this is the poster's code, but my own comments
      var insert = function(intervals, newInterval) {
        let size = intervals.length;
        let index = 0;
        let res = [];

        // Below, the new interval comes clean after intervals[index] so just throw
        // intervals[index] into the results array... until we get to a certain point,
        // a point where we have to do some work
        while(index < size && intervals[index][1] < newInterval[0]) {
            res.push(intervals[index]);
            index++;
        }
        
        // And that work is done below. The below runs as long as the new interval does not
        // follow after intervals[index]
        while(index < size && intervals[index][0] <= newInterval[1]) {
          // the below performs any necessary merging
            // the line below sets the left boundary of the merged interval
            newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
            // the line below sets the right boundary of the merged interval
            newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
            // the below increments index, so that we will deal with a new intervals[index]
            // in the next interation. the merged interval from the above two lines acts
            // as the new newInterval. Thus it is that we perform successive merges, as many
            // as needed
            index++;
        }
        // the line below will push the merged interval to our results array.
        // the only work left to do after this point is to dump the remaining intervals into
        // the results array for our final return
        res.push(newInterval);
        
        // dump the remaining left over intervals (which don't need any kind of work performed
        // on them) into the results array
        while(index < size) {
            res.push(intervals[index]);
            index++;
        }
        
        // send the pretty package back up
        return res;
      }
    */
    /*
      Example 1:
       [[1, 3], [6, 9]], newInterval = [2, 5]
      Output: [[1, 5], [6,9]]
      I:
      O:
      C:
      E:
      P:
      
    */
  if (intervals.length === 0) return [newInterval];
  
  const leftIntervals = [];
  
  while (newInterval && intervals.length > 0) {
    [oldStart, oldEnd] = intervals.shift(); // dequeue intervals and destructure
    [newStart, newEnd] = newInterval; // destructure
    
    // Six cases, mutually exclusive
    // Case 1: new < existing
    if (newStart < oldStart && newEnd < oldStart) {
      // intervals.unshift([[newStart, newEnd],[oldStart, oldEnd]]);
      intervals.unshift([oldStart, oldEnd]);
      intervals.unshift([newStart, newEnd]);
      // intervals.flat();
      newInterval = null;
    }
    // Case 2: existing < new
    if (newStart > oldEnd) {
      // intervals.unshift([newStart, newEnd]);
      // intervals.unshift([oldStart, oldEnd]);
      // newInterval = null;
      leftIntervals.push([oldStart, oldEnd]);
      newInterval = [newStart, newEnd];
    }
    // Case 3: new < existing, with some overlap
    if (newStart < oldStart && newEnd >= oldStart) {
      newInterval = [newStart, oldEnd];
      
    }
    // Case 4: new IN existing (i.e., complete overlap)
    if (newStart >= oldStart && newEnd <= oldEnd) {
      leftIntervals.push([oldStart, oldEnd]);
      newInterval = null;
    }
    // Case 5: existing < new, with SOME overlap
    if (newStart <= oldEnd && newEnd > oldEnd) {
      newInterval = [oldStart, newEnd];
    }
    // Case 6: existing IN new
    // to write
    if (newStart < oldStart && oldEnd < newEnd) {
      newInterval = [newStart, newEnd]
    }
    
    // use Math.min and Math.max
  }
  
  if (intervals.length === 0 && newInterval) intervals.push(newInterval);
  newInterval = null;
  
  return leftIntervals.concat(intervals);
  
};