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

function makeLine(length, number) {
  let str = '';
  let j = length - number;
  for (let i = 0; i < j; i++) {
    str += ' ';
  }
  for (j; j < length; j++) {
    str += '*';
  }
  return str;
}

function drawStairs(n, num = 1) {
  console.log(makeLine(n, num));
  if (num === n) return;
  return drawStairs(n, num + 1);
}


module.exports = drawStairs;
