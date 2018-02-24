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

 const isPalin = (arr) => {
 	for (let i = 0; i < arr.length/2; i++){
 		if (arr[i] !== arr[arr.length-1-i]) return false
 	}
 return true;
 }

function permPalin(str) {

	let results = [];
	let bool = false;

  if (str.length === 1) 
    return true;

  const recur = (arr , perm = []) =>{
  	if (arr.length === 0){
  		results.push(perm);
  	}
  	else{
  		for (let i = 0; i < arr.length; i++){
  			let curr = arr.slice();
  			let next = curr.splice(i, 1);
  			recur (curr.slice(), perm.concat(next))
  		}
  	}
  }
  recur(str.split(''))

  console.log(results)

  results.forEach((perm) => {
  	if (isPalin(perm)) bool = true;
  })
  
  return bool;
}

console.log(permPalin('cbac'))

module.exports = permPalin;



  