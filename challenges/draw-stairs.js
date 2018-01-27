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

function drawStairs(n) {
	if (n <= 0) {
		return 'Enter a positive integer'
	}

	if (n > 100) n = 100;

	let str = '*';


	if (n > 0) {
		str += '*'
		console.log(str.repeat(n));
		n--
		return drawStairs(n, str)
	}

	// for (let i = 0; i <= n; i++) {
	// 	console.log(str.repeat(n));
	// }
}


module.exports = drawStairs;
