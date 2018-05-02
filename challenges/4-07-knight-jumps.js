// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

// 4-07

// function knightjumps(str) {

// }


// CSmith Erik
// sorry for the vars :'(

// brute force. check all the moves and see if the square goes out of bounds
function knightjumps(str) {
  var knightMoves = [
    -2, -1, -2, 1,
    2, 1, 2, -1,
    -1, 2, -1, -2,
    1, 2, 1, -2
  ];
  var counter = 0;
  var x = parseInt(str[1]);
  var y = parseInt(str[3]);
  for (var i = 0; i < knightMoves.length - 1; i += 2) { // loop over the 8 possible moves
    if (x + knightMoves[i] > 0 && y + knightMoves[i + 1] > 0 && x + knightMoves[i] < 9 && y + knightMoves[i + 1] < 9) {
      counter++;
    }
  }
  return counter;
}


// // check using the position of the square instead of examining the possible moves
// function knightjumps(str) {
//   var x = 1 * str[1]; // another way to parse integers
//   var y = 1 * str[3];

//   var spaces = 0;
//   if (x - 1 >= 1) {
//     if (y - 2 > 0) spaces++;
//     if (y + 2 < 9) spaces++;
//   }
//   if (x - 2 >= 1) {
//     if (y - 1 > 0) spaces++;
//     if (y + 1 < 9) spaces++;
//   }
//   if (x + 1 <= 8) {
//     if (y - 2 > 0) spaces++;
//     if (y + 2 < 9) spaces++;
//   }
//   if (x + 2 <= 8) {
//     if (y - 1 > 0) spaces++;
//     if (y + 1 < 9) spaces++;
//   }
//   return spaces;
// }

// // math it up
// function knightjumps(str) {
//   var x = reflect(+str[1]); // yet another way to parse integers, then reflect the coordinate
//   var y = reflect(+str[3]);
//   var x_distance = Math.max(3 - x, 0);
//   var y_distance = Math.max(3 - y, 0);
//   return 8 - distanceToValue(x_distance + y_distance);
// }
// function distanceToValue(d) { return d < 2 ? 2 * d : d + 2; }
// function reflect(n) { return n > 4 ? 9 - n : n; }

module.exports = knightjumps;
