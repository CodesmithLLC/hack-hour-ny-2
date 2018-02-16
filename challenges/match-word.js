// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

const isLetter = (str) => {
  return str.match(/[a-zA-Z]/i);
}
const getReverse = (str) => {
	let temp = '';
	for (let i = str.length-1; i >= 0; i--){
		temp += str[i];
	}
	return temp.toUpperCase();
}

function matchWord(str) {
	
	if (str.length < 3) return false;

	const stack = [];
	let temp = '';
	for (let i = 0; i < str.length; i++){
		if (isLetter(str[i])){
				temp += str[i];
			}
		if (!isLetter(str[i]) && temp.length !== 0){
			if (stack.length === 0)
				stack.push(temp.toUpperCase());
			else if (stack[stack.length-1] === getReverse(temp))
				stack.pop();
			else if (stack[stack.length-1] !== getReverse(temp))
				stack.push(temp.toUpperCase());
			temp = '';
		}
		if (temp.length > 0 && i === str.length-1)
			if (stack[stack.length-1] === getReverse(temp))
				stack.pop();
	}

	console.log(stack);
	if (stack.length > 0) return false;
	else return true;
}


//console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));



module.exports = matchWord;
