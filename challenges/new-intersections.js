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


// CSmith Erik
function newIntersections(x, y) {
  // create object that stores all vertical lines created by x-y coords
  const verticalLines = x.reduce((lines, xCoord, index) => {
    if (!lines[xCoord]) lines[xCoord] = { max: y[index], min: y[index] };
    lines[xCoord].max = Math.max(lines[xCoord].max, y[index]);
    lines[xCoord].min = Math.min(lines[xCoord].min, y[index]);
    return lines;
  }, {});

  // create object that stores all horizontal lines
  const horizontalLines = y.reduce((lines, yCoord, index) => {
    if (!lines[yCoord]) lines[yCoord] = { max: x[index], min: x[index] };
    lines[yCoord].max = Math.max(lines[yCoord].max, x[index]);
    lines[yCoord].min = Math.min(lines[yCoord].min, x[index]);
    return lines;
  }, {});

  // initialize intersections variable
  let intersections = 0;

  // nested loop through lines objects
  Object.keys(verticalLines).forEach((xCoord) => {
    Object.keys(horizontalLines).forEach((yCoord) => {
      // increment intersections if lines intersect
      if (
        verticalLines[xCoord].min < yCoord
        && yCoord < verticalLines[xCoord].max
        && horizontalLines[yCoord].min < xCoord
        && xCoord < horizontalLines[yCoord].max
      ) {
        intersections += 1;
      }
    });
  });
  // return intersections
  return intersections;
}

const xx = [1, 3, 5, 7, 9, 11, 5];
const yy = [4, 2, 0, 2, 11, 13, 6];
console.log(`expect ${newIntersections(xx, yy)} to be 1`);

const xxx = [2, 2, 3, 3, 4, 4, 6, 6, 7, 7, 8, 8];
const yyy = [2, 5, 4, 9, 3, 8, 4, 9, 2, 4, 3, 8];
console.log(`expect ${newIntersections(xxx, yyy)} to be 3`);

module.exports = newIntersections;
