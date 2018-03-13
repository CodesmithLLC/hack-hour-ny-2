// Write a function "countTwos" that takes a number as an argument, n.
//The function will return the number of 2s encountered when counting from 1 to n
//(inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  if (num < 10) return num % 10 < 2 ? 0 : 1;
  const str = num.toString();
  let firstDigit = Number(str[0]);
  if (firstDigit === 1) return countTwos(Number(str.substring(1))) + countTwos(Number(allDs(str,'9')));
  if (firstDigit === 2) return num - Number('1' + allDs(str, '9')) + countTwos(Number(str.substring(1))) + countTwos(Number(allDs(str,'9'))) * 2;
  if (firstDigit > 2) return Number('1' + allDs(str, '0')) + countTwos(Number(str.substring(1))) + countTwos(Number(allDs(str,'9'))) * firstDigit;
}

function allDs(str, D) {
  let s = '';
  for (let i=0; i < str.length-1; i++) {
    s += D;
  }
  return s;
}

// console.log(countTwos(11420));



module.exports = countTwos;
