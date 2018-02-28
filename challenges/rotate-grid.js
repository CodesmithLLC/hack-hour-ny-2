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
	// inputs: 2D arrays (arrays nested within an array), n ?? 
	// rotate in place (same space in memory)
	for (let j = n - 1; j >= 0; j--) {
		for (let i = 0; i < n; i++) {
			grid[i].push(grid[j][i]);
		}
	}

	return grid.map((arr) => {
		return arr.slice(n);
	})
}

const sampleGrid = [  [1, 2, 3], [4, 5, 6], [7, 8, 9]  ];

console.log(rotateGrid(sampleGrid, 3));

module.exports = rotateGrid;
