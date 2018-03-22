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

function create(str, left, arr){
  if(!left.length){
    arr[str] = true;
    return;
  }

  left.forEach((letter, i) => {
    const newArr = [...left];
    newArr.splice(i, 1);
    create(str + letter, newArr, arr)
  })
}

function anagrams(string) {
  let result = {};
  create('', string.split(''), result);
  return Object.keys(result);
}

module.exports = anagrams;
