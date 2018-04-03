/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 [1*7*3, 1*7*4, 1*3*4]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {

	// multiply all across
	// remove duplicates

	let target = array.length - 1
	let massArray = [];
	// let counter = 1;

	for(let i = 0; i < array.length; i++){
		productCalculation(array[i])
	}

	function productCalculation(value){
			if(counter !== target)
				productCalculation(value * array[counter])
		  else
				massArray.push(value * array[target])
				counter = 1; 
		} 
		return value;
	}

	massArray.toSet(); // convert array to set. To figure out exact syntax later. 
	return massArray;

}

module.exports = getAllProducts;
