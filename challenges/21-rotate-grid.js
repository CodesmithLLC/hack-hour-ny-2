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
  const rows = grid.length;
  const columns = grid[0].length;
  let result = [];
  for(let col = 0; col < columns; col++){
    let newRow = [];
    for(let row = rows - 1; row >= 0; row--){
      newRow.push(grid[row][col])
    }
    result.push(newRow);
  }

  return result;
}


// function flatArr(grid) {
//   const n = grid[0].length;
//   let arr1 = [];
//   for (let i=0; i< Math.floor(n/2); i++) {
//     let arr2 = [];
//     arr2 = arr2.concat(grid[i].slice(i,n-2*i+1));
//     // arr1 = arr1.concat(arr2);
//     let x = n-i-1;
//     for (let y=i+1; y<n-2*i-1; y++ ) {
//       arr2.push(grid[y][x]);
//     }
//     arr2 = arr2.concat(grid[n-i-1].slice(i,n-2*i+1).reverse());
//     x = i;
//     for (let y=n-2*i-2; y>i; y-- ) {
//       arr2.push(grid[y][x]);
//     }
//     arr1.push(arr2);
//   }
//   if (n%2 === 1) arr1.push([grid[Math.floor(n/2)][Math.floor(n/2)]])
//   console.log(arr1);
//   return arr1;
// }









module.exports = rotateGrid;
