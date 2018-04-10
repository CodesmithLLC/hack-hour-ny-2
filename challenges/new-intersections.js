/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points directly above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW', for example, means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

function newIntersections(x, y){
  const objx = {};
  const objy = {};
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (!objx[x[i]]) objx[x[i]] = [objx[y[i]]];
    else objx[x[i]].push(y[i]);
    if (!objy[y[i]]) objy[y[i]] = [objy[x[i]]];
    else objy[y[i]].push(x[i]);
  }
  for (let xkey in objx) {
    if (objx[xkey].length >= 2) {
      let max = Number.NEGATIVE_INFINITY;
      let min = Number.POSITIVE_INFINITY;
      for (let j = 0; j < objx[xkey].length; j++) {
        max = Math.max(max, objx[xkey][j]);
        min = Math.min(min, objx[xkey][j]);
      }
      for (let k = min; k < max; k++) {
        let left = false;
        let right = false;
        if (objy[k].length >= 2) {
          for(let m = 0; m < objy[k].length; m++) {
            if (objy[k][m] < xkey) left = true;
            if (objy[k][m] > xkey) right - true;
          }
          if (left & right) count++;
          left = false;
          right = false;
        }
      }
    }
  }
  return count;

//test all possible points -- not efficient
  // let minx = Number.POSITIVE_INFINITY;
  // let maxx = Number.NEGATIVE_INFINITY;
  // let miny = Number.POSITIVE_INFINITY;
  // let maxy = Number.NEGATIVE_INFINITY;
  // for (let i = 0; i < x.length; i++) {
  //   minx = Math.min(minx, x[i]);
  //   maxx = Math.max(maxx, x[i]);
  //   miny = Math.min(miny, y[i]);
  //   maxy = Math.max(maxy, y[i]);
  // }
  // for (let j = minx; j < maxx; j++) {
  //   for (let k = miny; k < maxy; k++) {
  //     for (let z = 0; z < x.length; z++) {
  //       if (x[z])
  //     }
  //   }
  // }
}

module.exports = newIntersections;
