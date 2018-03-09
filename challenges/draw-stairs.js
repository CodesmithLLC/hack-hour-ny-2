/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n, counter = 1) {
	if (n <= 0) return n;

	if (n > 100) n = 100;

	// variables for string concatenation 
	let space = ' ';
	let star = '*';

	// increment counter before each recursive call
	if (counter <= n) {
		// draw a star n number of times
		star = star.repeat(counter);
		// the difference between n and the counter are the number of spaces
		space = space.repeat(n - counter)
		// spaces come before stars
		console.log(space + star);
		counter++
		return drawStairs(n, counter)
	}
}


module.exports = drawStairs;
