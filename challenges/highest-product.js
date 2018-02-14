/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	const combinations = [];
  const recur = (comb, arr) => {
   // console.log(comb);
    for (let i = 0; i < arr.length; i++){
    	if (comb.length === 2)
      	combinations.push( comb.concat(arr[i]) );
      
      recur( comb.concat(arr[i]), arr.slice(i+1) );
    }
  }
	recur([], array);
  
  let result = false;
  let product;
  let greatest = combinations[0].reduce((acc, cur) => 
  	acc * cur, 
  	combinations[0][0])

  
  combinations.forEach((comb) => {
    product = comb.reduce((acc, cur) => 
    	acc * cur)
    if (product > greatest) greatest = product;
  })
  return greatest;
}

console.log(highestProduct([1, 2, 3, 4]));
module.exports = highestProduct;
