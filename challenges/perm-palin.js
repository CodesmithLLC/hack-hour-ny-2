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
  let letters = {}
  let odds = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] in letters) {
      letters[str[i]] += 1;  
    }
    else {
      letters[str[i]] = 1; 
    }
  }

  for (key in letters) {
    if (letters[key] % 2 !== 0) {
      odds += 1
    }
  }
  return odds > 1 ? false : true
}

module.exports = permPalin;