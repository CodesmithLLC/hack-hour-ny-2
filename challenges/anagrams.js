/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 function anagrams(string) {
  let letters = string.split('');
  return permute(letters);
}
function permute(letters) {
  if (letters.length === 1) {
    return letters;
  } 
  let permutations = [];
  for (let i = 0; i < letters.length; i++) {
    let lettersCopy = letters.slice(0);
    let fixedLetter = lettersCopy.splice(i, 1);
    let recursivePermutations = permute(lettersCopy);
    for (let j = 0; j < recursivePermutations.length; j++) {
      permutations.push(fixedLetter.concat(recursivePermutations[j]).join(''));
    }
  }
  return permutations;
}


module.exports = anagrams;
