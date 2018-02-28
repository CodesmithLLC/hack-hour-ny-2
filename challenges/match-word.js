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
  str = str.toLowerCase()
  const arr = str.split(/[^A-Za-z]/);

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '') {
      res.push(arr[i])
    }
  }
  console.log(res)
  for (let i = 0; i < res.length; i++) {
    let word = res[i];
    let backwards = word.split('').reverse().join('');

    // get copy of array without the current word to see if array includes another word (not itself) backwards ...so '__ENDDNE__' returns false
    let copy = [...res]
    let tempArr = copy.splice(i, 1);

    if (!copy.includes(backwards)) {
      return false;
    }
  }
  return true;
}

module.exports = matchWord;
