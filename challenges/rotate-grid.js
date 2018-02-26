/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents
 * the ith row in the grid.
 *
 * Write a function to rotate the grid 90 degrees clockwise.
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *
 *                  rotateGrid(sampleGrid, 3);
 *
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 *[   [1, 2, 3], [4, 5, 6], [7, 8, 9]  ]
 *[   [7, 4, 1], [8, 5, 2], [9, 6, 3]  ]
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  // everything in 0 index array needs to move to 2 index of each array
  // everything in 1 index array needs to move to 1 index of each array
  // everything in 2 index array needs to move to 0 index of each array
  // move from the position of array to position in array

  // create an array with n places
  let newArr = new Array(n);
  // iterate over each array
  grid.forEach((arr, i) => {
    // iterate over element in array
    arr.forEach((el, k) => {
      // if k is the first position in array then array doesnt exist yet
      if (i === 0) {
        newArr[k] = [];
        newArr[k].unshift(el);
      } else {
        newArr[k].unshift(el);
      }
    });
  });
  return newArr;
}

module.exports = rotateGrid;
