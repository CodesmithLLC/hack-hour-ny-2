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

let grid = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 11, 12, 13], [14, 15, 16, 17]];
console.log(rotateGrid(grid, 4));

function rotateGrid(grid, n) {
    //iterate backwards through outer array, pushing the elements in order into new arrays

    // let result = [];
    // for (let i = 0; i < n; i++) {
    //     result.push([]);
    // }

    // for (let i = n - 1; i >= 0; i--) {
    //     for (let j = 0; j < n; j++) {
    //         result[j].push(grid[i][j]);
    //     }
    // }

    // return result;

    grid.forEach((row, i) => {
      grid[i] = row.concat(row);
    });

    // we don't want iterate through the same elements twice
       for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            grid[n - i - 1][j] = grid[i][j + n];
        }
    }
    grid.forEach((row, i) => {
      grid[i].splice(n,n);
    });

    return grid;
}

module.exports = rotateGrid;
