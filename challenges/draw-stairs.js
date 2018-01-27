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

	let space = ' ';
	let str = '*';

	if (counter <= n) {
		str = str.repeat(counter);
		space = space.repeat(n - counter)
		console.log(space + str);
		counter++
		return drawStairs(n, counter)
	}
}


module.exports = drawStairs;
