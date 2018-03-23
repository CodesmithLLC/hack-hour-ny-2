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
    var resultTwo = anagrams('abcd');
    console.log(resultTwo); ['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 
                             'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca',
                             'cabd', 'cadb', 'cbad', 'cbda', 'cdab, 'cdba',
                             'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba']
  */

function anagrams(string) {
  let initStr = string.split('');
  let str = initStr;
  const seen = {};
  for (let j = 0; j < str.length - 1; j++) {
    for (let i = 0; i < str.length; i++) {
      if(!seen[str]) seen[str] = true;
      str = str.push(str.shift());
    }
    initStr = 
  }
  

  

  // const result = [];
  // let arr = string.split('');
  // return result.concat(anagrams(arr.splice(1).join('')));
}

module.exports = anagrams;
