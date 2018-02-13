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

function matchWord(str) {
	// empty string returns true
	if(!str) return true
	let firstWord = '', lastWord = '', fristLength;

	// iterate through the string until we get to the first letter (break for loop)
	for (let i = 0; i < str.length; i++) {
		// stop iteration and storing letters when we hit a space or special char
		if(firstWord && str[i].match(/[^A-Za-z]/)) {
			break;
		}
		// store letters to create the first word
		if(str[i].match(/[A-Za-z]/)) {
			firstWord += str[i];
		}
	}

	firstWord = firstWord.toLowerCase();
	fristLength = firstWord.length;

	if (str[str.length - 1].match(/[^A-Za-z]/)) {
		// iterate backwards through the str
		for (let j = str.length -1; j >= fristLength; j--) {
			if(lastWord && str[j - 1].match(/[^A-Za-z]/)) {
				lastWord = str[j] + lastWord.slice(0);
				break;
			}

			if(str[j].match(/[A-Za-z]/)) {
				lastWord = str[j] + lastWord.slice(0);
			}
		}
	} else {
		// take the length of the first word and slice the string to get the last word
		lastWord = str.slice(-fristLength);
	}

	lastWord = lastWord.toLowerCase();

	// compare the first and last words to confirm they're reverse
	return firstWord.split('').reverse().join('') === lastWord;
}

module.exports = matchWord;
