/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

// console.log(permPalin('abab'))
// console.log(permPalin('cbaba'))
// console.log(permPalin('cbac'))
// console.log(permPalin('a'))

function permPalin(str) {
  let count = {};
  let sArr = str.split('');

  sArr.forEach(char => {
    // check if it exists in the count
    // if so decrease count or delete prop
    if(count[char] === 1) delete count[char];
    else if(count[char] > 1) count[char] -= 1;
    // if not, add it
    else count[char] = 1;
  });

  // return if the number of keys is <= 1
  return (Object.keys(count).length <= 1);
}

module.exports = permPalin;