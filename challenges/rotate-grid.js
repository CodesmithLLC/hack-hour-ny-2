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
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  let outer = []

  for (i = 0; i < n; i += 1) {
    outer[i] = [];
    outer[i][i] = 0
  }

  for (let t = 0; t < n; t += 1)  {
    let p = 0
    for (let h = 0; h < n; h += 1) {
      outer[p][n -1 -t ] = grid[t][h] 
      p += 1
    }
  }
  return outer
}


module.exports = rotateGrid;
