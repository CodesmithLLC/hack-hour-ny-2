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
  let word = '';
  let stack = [];

  const letters = str.toLowerCase().split('');

  for(let i = 0; i < letters.length; i++){
    const letter = letters[i];

    if(letter >= 'a' && letter <= 'z'){
      word += letter;
    }
    if((letter < 'a' || letter > 'z' || i === letters.length - 1) && word){
      // compare to last push
      // if reverse--pop
      // else push word
      // blank word
      const reverse = (stack.length) ? stack[stack.length - 1].split('').reverse().join('') : '';
      if(word === reverse){
        stack.pop();
      }
      else {
        stack.push(word);
      }
      word = '';
    }
  }

  return !stack.length
}


console.log(matchWord('__END_DNE-----'));  // -> true
console.log(matchWord('__ENDDNE__'));  // -> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));  // -> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'));  // -> false     not properly closed. like ( [) ]
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  // -> true
console.log(matchWord(''));  //-> true

module.exports = matchWord;
