/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
	let charStart = ['(','{','['];
	let charEnd = [')','}',']'];

	let collectionStartArray = []; 
	let collectionEndArray = [];
	let matchChar = "";
	let position = null;
	
		for(i = 0; i < input.length; i++){
			if(charStart.indexOf(input[i]) >= 0)
				collectionStartArray.push(input[i]);
			else if(charEnd.indexOf(input[i]) >=0)
				collectionEndArray.push(input[i]);
		}
		console.log(collectionStartArray)
		console.log(collectionEndArray)

		if(collectionStartArray.length !== collectionEndArray.length){
			return false; 
		}

		for(j = 0; j < collectionStartArray.length; j++){
			if(collectionStartArray[j] === '('){
				matchChar = ')';
				booleanChecker(collectionEndArray.indexOf(matchChar),collectionEndArray)
			} 
				else if(collectionStartArray[j] === '{'){
				matchChar = '}';
				booleanChecker(collectionEndArray.indexOf(matchChar),collectionEndArray)
			}
				else if(collectionStartArray[j] === '['){
				matchChar = ']'
				booleanChecker(collectionEndArray.indexOf(matchChar),collectionEndArray)
			}
		}
		if(collectionEndArray.length !== 0)
			return false; 
		return true; 
}

let booleanChecker = function(position,collection){
	if(position >= 0){ 
		collection.splice(position, 1);
	}
}




	
	

module.exports = balancedParens;
