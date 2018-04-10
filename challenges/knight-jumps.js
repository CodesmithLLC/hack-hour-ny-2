// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// const str1 = "(0 0)";

function validMove(x, y) {
  const validX = x >= 0 && x <= 8;
  const validY = y >= 0 && y <= 8;
  return validX && validY ? 1 : 0;
}

function knightjumps(str) {
  const x = Number(str.substring(1, 3));
  const y = Number(str.substring(3, 4));

  const xMove = [1, 2];
  const yMove = [2, 1];

  let ways = 0;

  for (let i = 0; i < xMove.length; i += 1) {
    ways += validMove(x + xMove[i], y + yMove[i]);
    ways += validMove(x + xMove[i], y + (-1 * yMove[i]));
    ways += validMove(x + (-1 * xMove[i]), y + yMove[i]);
    ways += validMove(x + (-1 * xMove[i]), y + (-1 * yMove[i]));
  }

  return ways;
}

module.exports = knightjumps;
