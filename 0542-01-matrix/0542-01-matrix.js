/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  /*
    0 0 0     0 0 0    0 0 0    0 0 0
    0 1 0  -> 0 n 0 -> 0 1 0 -> 0 1 0
    1 1 1     n n n    1 n 1    1 n 1
    
    p
      make successive passes
      initial pass is to map all 0s to 0 and non 0s to null
      second pass is to map all non zero neighbors of a 0 to 1
      third pass is to map all non zero non 1 neighbors of 1 to 2
      etc.
      
      i is the row #, so the y coord
      j is the col #, so the x coord
  */
  
  // count undefined
  let countUndefined = 0;
  let dist = 1;
  let queueOfQueues = [[]]; // queueOfQueues[0] is the front, it is a queue of position 2-tuples
  
  // initial pass
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] !== 0) {
        mat[i][j] = undefined;
        // countUndefined++;
        queueOfQueues[0].push([i,j]); // what are we storing?
      }
    }
  }
  
  // console.log(queueOfQueues);
  let i;
  let j;
  // [ [ [6, 3], [3, 4], [3, 7], ] ]
  
  while (queueOfQueues.length > 0) {
    let newQueue = [];
    
    while(queueOfQueues[0].length > 0) {
      i = queueOfQueues[0][0][0];
      j = queueOfQueues[0][0][1];
      // to implement, go through cells to be processed
      if (mat[i - 1]?.[j] === dist - 1 || mat[i]?.[j+1] === dist - 1 || mat[i+1]?.[j] === dist - 1 || mat[i]?.[j-1] === dist - 1) {
        mat[i][j] = dist;
      } else {
        newQueue.push([i, j]);
      }
      queueOfQueues[0].shift();
    }
    
    if (newQueue.length > 0) queueOfQueues.push(newQueue);
    dist++;
    queueOfQueues.shift();
    // console.log(queueOfQueues);
  }
  
  
  // // handle second_to_n pass
  // while (countUndefined > 0) {
  //   // console.log('countUndefined: ' + countUndefined);
  //   for (let i = 0; i < mat.length; i++) {
  //     for (let j = 0; j < mat[i].length; j++) {
  //       if (mat[i][j] === undefined) {
  //         if (mat[i-1]?.[j] === dist - 1 || mat[i]?.[j+1] === dist - 1 || mat[i+1]?.[j] === dist - 1 || mat[i]?.[j-1] === dist - 1) {
  //           mat[i][j] = dist;
  //           countUndefined--;
  //         }
  //       }
  //     }
  //   }
  //   dist++;
  // }
  
//   // second pass, hard coded
//   for (let i = 0; i < mat.length; i++) {
//     for (let j = 0; j < mat[i].length; j++) {
//       if (mat[i][j] === undefined) {
//         if (mat[i-1]?.[j] === 0 || mat[i]?.[j+1] === 0 || mat[i+1]?.[j] === 0 || mat[i]?.[j-1] === 0) {
//           mat[i][j] = 1;
//           countUndefined--;
//         }
//       }
//     }
//   }
  
//   // third pass, hard coded
//   for (let i = 0; i < mat.length; i++) {
//     for (let j = 0; j < mat[i].length; j++) {
//       if (mat[i][j] === undefined) {
//         if (mat[i-1]?.[j] === 1 || mat[i]?.[j+1] === 1 || mat[i+1]?.[j] === 1 || mat[i]?.[j-1] === 1) {
//           mat[i][j] = 2;
//         }
//       }
//     }
//   }
  
  return mat;
    
};