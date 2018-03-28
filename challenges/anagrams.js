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
  let letter, shorterWord, allAnagrams; 
  if(str.length < 2) return [str];
  else {
    allAnagrams = []; 
    for(var i = 0; i < str.length; i++){
      letter = str[i]; 
      shorterWord = str.substr(0,i) + str.substr(i+1, str.length-1);
      const shorterWordArray = anagrams(shorterWord); 
      shorterWordArray.map(word => allAnagrams.push(letter + word))
    }
    
    allAnagrams = [...new Set(allAnagrams)]; 
    
    // allAnagrams = Array.from(new Set(allAnagrams)) // same thing
    
    // better time complexity to store to obj, then return keys of that obj 

    return allAnagrams;
  }
}



anagrams('hellow')

module.exports = anagrams;
