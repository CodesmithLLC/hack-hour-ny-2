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

 
 isEven = (num) => {
  return num % 2 === 0;
}


permPalin = (str) => {

  const len = str.length; 
  if(len === 1) return true;
  const hash = {}; 
  
  
  for(var char of str){

    if(!hash[char]) hash[char] = 1;
    else hash[char] += 1;
    
  }
  
  let vals = Object.values(hash);
  console.log(vals)

    // if even len str - there needs to be even count of all letters 
    if(len % 2 === 0){
      return vals.reduce((curr, next) => {
        return curr && isEven(next)
      }, true)
    }

    // if odd length str, all chars but one need even count
    if(len % 2 !== 0){
     let output = vals.filter((val) => (!isEven(val)))
     return output.length === 1; 
   }

 }


 module.exports = permPalin;



 