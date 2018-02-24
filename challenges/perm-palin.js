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


function permPalin(str) {
  if (str.length === 1) return true;

  let result;
  let arr = str.split('');
  let hash = {};
  // console.log(arr)

  for (let item of arr) {

    if (hash[item]) {
      hash[item] += 1;
    } else {
      hash[item] = 1;
    }

  }
  // console.log(hash)
  let odd = 0;
  for (let char in hash) {
    // console.log(char)
    if (hash[char] % 2 !== 0) {
      odd += 1;
    }
    result = odd > 1 ? false : true;
  }
  return result;

}

module.exports = permPalin;