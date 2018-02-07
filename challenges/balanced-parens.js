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
	// ignore non-bracket characters
	let cleanInput = input.replace(/[A-Za-z0-9$&+,:;=?@#|'<>.\^*%!-]/g, '');
	cleanInput = cleanInput.replace(/\s/g, '');

	let counter = 0;
	let stack = [];
	
	while (counter < cleanInput.length) {
		if (cleanInput[counter] === '[' || cleanInput[counter] === '(' || cleanInput[counter] === '{') {
			stack.push(cleanInput[counter]);
		}

		if (cleanInput[counter] === ']' || cleanInput[counter] === ')' || cleanInput[counter] === '}') {
			let last = stack.pop();
			if (!isPair(last, cleanInput[counter])) return false;	
		}
		counter++
	}

	if (stack.length) {
		return false;
	} else {
		return true;	
	}
}

function isPair(char1, char2) {
	if (char1 === '[' && char2 === ']') return true;
	if (char1 === '(' && char2 === ')') return true;
	if (char1 === '{' && char2 === '}') return true;
	return false;
}

console.log(balancedParens('({}){(]')); // false

module.exports = balancedParens;
