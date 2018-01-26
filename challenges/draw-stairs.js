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

function drawStairs(n, previous = 0, stair = [""]) {
    if (n !== 0) {
        let newStair = "\n" + stair[previous] + "*";
        stair.push(newStair);
        drawStairs(n - 1, previous + 1, stair);
    } else {
        console.log(stair.join(""));
    }
}


module.exports = drawStairs;
