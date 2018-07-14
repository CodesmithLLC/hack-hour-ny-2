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

function makeObj(arr1, arr2){
	return arr1.reduce((acc, cur, i) => {
	 	if (!acc[cur]) acc[cur] = { min: arr2[i], max: arr2[i]}

	 	acc[cur].max = Math.max(acc[cur].max, arr2[i])
	 	acc[cur].min = Math.min(acc[cur].min, arr2[i])

	 	return acc;
	}, {})
}

function newIntersections(x, y){

	const xObj = makeObj(x, y)
	const yObj = makeObj(y, x)

	console.log("xObj : ")
	console.log(xObj)
	console.log('----------------------------------')
	console.log("yObj : ")
	console.log(yObj)

	let intersections = 0;
	for (let xCoord in yObj){
		for (let yCoord in xObj){
			if ( xObj[yCoord].min < xCoord && xCoord < xObj[yCoord].max &&
					 yObj[xCoord].min < yCoord && yCoord < yObj[xCoord].max) 
				intersections++;
		}
	}
	return intersections;
}

console.log(newIntersections([0,1,1,2],[1,2,0,1]))

module.exports = newIntersections;

