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

// function rotateGrid(grid, n) {
//   const rows = grid.length;
//   const columns = grid[0].length;
//
//   let result = [];
//   for(let col = 0; col < columns; col++){
//     let newRow = [];
//     for(let row = rows - 1; row >= 0; row--){
//       newRow.push(grid[row][col])
//     }
//     result.push(newRow);
//   }
//
//   return result;
// }

function rotateGrid(grid, n) {
  // outer edge
  
}

console.log(rotateGrid([[1,2,3], [4,5,6], [7,8,9]]))

module.exports = rotateGrid;