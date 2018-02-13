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
  if (str === '') return true;
  const checkStr = str.toLowerCase();
  const re = /([a-z])+/g;
  const matchArr = checkStr.match(re);
  const tempArr = [];
  for (let i = 0; i < matchArr.length; i += 1) {
    const revString = matchArr[i].split('').reverse().join('');
    if (revString === tempArr[tempArr.length - 1]) {
      tempArr.pop();
    } else tempArr.push(matchArr[i]);
  }
  if (tempArr.length > 0) return false;
  return true;
}

module.exports = matchWord;
