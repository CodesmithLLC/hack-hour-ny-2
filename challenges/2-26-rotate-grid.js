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
  var newArray = [];
  for (var i = 0; i < n; i++) {
    newArray.push([]);
  };

  for (var i = 0; i < n; i++) {
    for (var j = n - 1; j >= 0; j--) {
      newArray[i].push(array[j][i]);
    };
  };
  // for (var i = n-1; i >= 0; i--) {
  //   for (var j = 0; j < n; j++) {
  //     newArray[j].push(array[i][j]);
  //   };
  // };
  return newArray;

  // for (var i = 0; i < n; i++) {
  //   for (var j = 0; j < i; j++) {
  //     //swap element[i,j] and element[j,i]
  //     var temp = grid[i][j];
  //     grid[i][j] = grid[j][i];
  //     grid[j][i] = temp;
  //   }
  // }

}

module.exports = rotateGrid;
