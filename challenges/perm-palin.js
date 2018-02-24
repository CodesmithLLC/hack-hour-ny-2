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
  const obj = {};

  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) obj[str[i]] = 1;
    else obj[str[i]]++;
  }

  let oddCount = 0;

  for (let key in obj) {
    if (obj[key] % 2) oddCount++;
  }

  if (oddCount > 1) return false;
  return true;

}

module.exports = permPalin;