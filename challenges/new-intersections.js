/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

function newIntersections(x, y){
  let intersections = 0
  let order_pairs = []
  for (i = 0; i < x.length; i += 1) {
   let temp = []
   temp.push(x[i]) 
   temp.push(y[i])
   order_pairs.push(temp)
  }
  order_pairs.sort( (a,b) => {return a[0] - b[0]})
  let minX = order_pairs[0][0]
  let maxX = order_pairs[order_pairs.length - 1][0]
  let minY = order_pairs[0][1]
  let maxY = order_pairs[order_pairs.length - 1][1]

  let count = 0
  for (let i = minX; i <= maxX ; i += 1) {
    for (let j = minY; j <= maxY; j += 1) {
      let countX = 0
      let countY = 0
      for (let z = 0; z < order_pairs.length; z += 1) {
        if (order_pairs[z][0] === i) countX += 1
        if (order_pairs[z][1] === j) countY += 1
      }
      if (countX >= 2 && countY >= 2) {
        intersections += 1
      }
    }
  }
  
  return intersections;
}

module.exports = newIntersections;
