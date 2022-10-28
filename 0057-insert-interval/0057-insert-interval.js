/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
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
    
    // Five cases, mutually exclusive
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
    
    console.log(intervals);
    console.log(newInterval);
    
    // use Math.min and Math.max
  }
  
  if (intervals.length === 0 && newInterval) intervals.push(newInterval);
  newInterval = null;
  
  return leftIntervals.concat(intervals);
  
};