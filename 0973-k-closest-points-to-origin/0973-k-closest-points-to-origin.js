/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  
  /*
    U: Given an array of points represented as [x, y] and a number k, find the k closest points to the origin (0, 0)
    M: Calculate distances, find k smallest distances, return the corresponding points
      [1, 3], [-2, 2]
       3.16     2.82
       copy to results arr
       while (res.length > k) "trim"
         res.splice( res.indexOf(Math.max(...res)), 1 )
       return res
    P: 
    I
    R
    E
  */
  // console.log(points);
  // console.log(k);
  // brute force solution
    // calculating using the distance formula, distance from origin to each point as represented by each element in the array
  // arr of distances, whereas points is an array of coordinates/2-tuples
  const res = points.map(([x, y]) => {
    return [x, y, Math.sqrt(x ** 2 + y ** 2)];
  })
  
  // console.log(res);
  while (res.length > k) {
    let max;
    let idx;
    res.forEach((e, i) => {
      if (!max) {
        max = e;
        idx = i;
      }
      else if (e[2] > max[2]) {
        max = e;
        idx = i;
      }
      // console.log('Maximum: ' + max + '| idx: ' + idx + '| res array: ' + JSON.stringify(res))
    })
    
    res.splice( idx, 1 );
    // console.log('Maximum: ' + max + '| idx: ' + idx + '| res array: ' + JSON.stringify(res))
  }
  
  // map data structure to keep connection between the point and the distance
  //
  
  // let temp = [];
  
  res.forEach((e, i, array) => {
    array[i] = [array[i][0], array[i][1]];
  })
  
  // console.log(res);
  return res;
};