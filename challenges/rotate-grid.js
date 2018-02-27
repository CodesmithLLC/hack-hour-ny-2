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

																				

	

 *grid[i=0][j=0] -> grid[j=0][n-1-i]
 	grid[i=0][j=1] -> grid[j=1][n-1-i]
 	grid[i=0][j=2] -> grid[j=2][n-1-i]

  grid[i=1][j=0] -> grid[j=0][n-1-i]
 	grid[i=1][j=1] -> grid[j=1][n-1-i]
 	grid[i=1][j=2] -> grid[j=2][n-1-i]

 	grid[i=2][j=0] -> grid[j=0][n-1-i]
 	grid[i=2][j=1] -> grid[j=1][n-1-i]
 	grid[i=2][j=2] -> grid[j=2][n-1-i]


 * BONUS: Do this in place
 */

	sampleGrid = [[1, 2, 3, 4],
							  [5, 6, 7, 8],
							  [9, 10, 11, 12],
							  [13, 14, 15, 16],
							    ]

function rotateGrid(grid, n) {
	let tempgrid = new Array(n);
	for (let i = 0; i < n; i++) {
  	tempgrid[i] = new Array(n);
	}

	for (let i = 0; i < n; i++){
		for (let j = 0; j < n; j++){
			tempgrid[j][n-1-i] = grid[i][j]
		  
		}
	}

	return tempgrid;
}


//console.log(rotateGrid(sampleGrid, 4))


module.exports = rotateGrid;
