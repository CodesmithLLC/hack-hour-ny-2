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

function reverseString(str) { 
  let reversed = '';
 for (let x = str.length - 1; x >= 0; x -= 1) {
  reversed += str[x];
 }
  return reversed;
}


function matchWord(str) {
  let lowerStr = str.toLowerCase()
  let words = [];
  for (let i = 0; i < lowerStr.length; i += 1) {
    let word = '';
    while (i < lowerStr.length && lowerStr[i].match(/[a-z]/)) {
      word += lowerStr[i];
      i += 1
    }
    if (word.length !== 0) {words.push(word)}
  }
  for (let i = 0; i < Math.floor(words.length); i += 1) {
    for (let j = i + 1; j < words.length; j += 1){
      if (words[i] === reverseString(words[j])) {
        if ((j === i + 1 || (j-i +1) % 2 === 0) ) {
          continue
        }
        else {return false}
      }
    }
  }
  return true
}

module.exports = matchWord;
