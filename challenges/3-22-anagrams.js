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

function anagrams(str) {
  if (str.length === 1 || str.length === 0) return [str];
  let result = [];
  const s = str[0];
  const subarr = anagrams(str.substring(1));
  subarr.forEach((anastr) => {
    for (let i = 0; i <= anastr.length; i++) {
      let news = anastr.substring(0, i) + s + anastr.substring(i);
      result.push(news);
    }
  })
  result = uniqify(result);

  return result;
}


function uniqify(arr) {
  let i = 0;
  while (i < arr.length - 1) {
    let j = i + 1;
    while (j < arr.length) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      } else {
        j++;
      }
    }
    i++;
  }
  return arr;
}

module.exports = anagrams;
