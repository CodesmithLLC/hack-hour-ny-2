// Write a function "countTwos" that takes a number as an argument, n.
// The function will return the number of 2s encountered when counting
// from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let count = 0;
  for (let i = num; i > 0; i--) {
    let curr = i.toString();
    if (curr.indexOf('2') >= 0) {
      let countTwo = 0;
      for (let k = 0; k < curr.length; k++) {
        if (curr[k] === '2') {
          countTwo += 1;
        }
      }
      count += countTwo;
    }
  }
  return count;
}

module.exports = countTwos;
