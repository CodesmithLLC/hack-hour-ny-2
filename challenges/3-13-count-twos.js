// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {

  // count number of first digit 2's (one for each 10's)
  // for each 20's, 200's, 2000's, etc, add 10, 100, 1000 ...

  if (num < 2) {
    return 0;
  }
  let numOfDigits = 1;
  while (num / 10 > 1) {
    num = num / 10;
    numOfDigits++;
  }



}

module.exports = countTwos;