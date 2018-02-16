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
  let s;
  for (let i = 0; i < n; i++) {
    s = "";
    for (let j = 0; j < n-i-1; j++) {
      s += " ";
    }
    for (let k = 0; k < i+1; k++) {
      s += "*";
    }
    console.log(s);
  }
}


module.exports = drawStairs;
