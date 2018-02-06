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
 * ignore non-bracket inputacters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
 

function balancedParens(input){
	
	
	const stack = [];

	for (let i = 0; i < input.length; i++){
		if (input[i] === '(' || input[i] === '{' || input[i] === '[')
			stack.push(input[i]);
		else if (input[i] === ')' || input[i] === '}' || input[i] === ']'){
			let lastPushed = stack.pop();
			if (input[i] === ')' && lastPushed !== '(')
			 	return false;
			 else if (input[i] === '}' && lastPushed !== '{')
			 	return false;
			 else if (input[i] === ']' && lastPushed !== '[')
			 	return false;
		}
			
	}
	console.log(stack);
	if (stack.length > 0)
		return false;
	else return true;
}



console.log(balancedParens(' var hubble = function() { telescopes.awesome();'))

//module.exports = balancedParens;
