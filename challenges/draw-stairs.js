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
	let star = '*';
	let stair = '';
	let whitespace = ' '; 
	let totalspace = '';

	while(n <= 100 && n >= 1){
	  
	  for(var i = 0; i < n - 1; i++){
	    totalspace += whitespace; 
	  }
	  
		stair +=star; 
		
		console.log(totalspace + stair);
		
		totalspace = '';
		n--;
	}
}

// make a new star
// in second row make star to the left of star. 



module.exports = drawStairs;
