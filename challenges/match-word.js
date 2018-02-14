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
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const PAIRS = { '(': ')', '[': ']', '{': '}' }
const OPENINGS = '([{';
const CLOSINGS = ')]}';
function matchWord(str) {
  if (str === '') return true;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (letters.includes(str[i])) {
      result += str[i].toLowerCase();
    }
    if (letters.includes(str[i]) && !letters.includes(str[i + 1])) {
      result += ' ';
    }
  }
  let arr = result.split(' ');

  arr.pop();
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i].split('');
    if (arr.length > 1) {
      for (let j = i + 1; j < arr.length; j++) {
        const diff = j - i;
        const match = arr[j].split('').reverse();
        if (String(curr) === String(match) && diff % 2 === 1) {
          return true;
        }
      }
    } else {
      return false;
    }
  }
  return false;
}
// console.log(matchWord('__END_DNE-----'));  // -> true
// matchWord('__ENDDNE__');  // -> false       (not separated by a space)
// matchWord('IF()()fi[]'); //  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  // -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'); // -> true
// matchWord(''); // -> true

module.exports = matchWord;
