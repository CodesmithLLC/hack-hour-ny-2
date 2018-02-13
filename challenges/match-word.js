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
  if (str==='') return true;
  const arr1 = str.toLowerCase().split(/\W|_/);
  const arr2 = arr1.filter( (item) => {
    return item !== '';
  })
  const buffer = [];
  //buffer.push(arr2[0]);
  for (let i=0; i<arr2.length; i++) {
    const s1 = buffer[buffer.length-1];
    if (closedPair(s1,arr2[i])) {
      buffer.pop();
    } else {
      buffer.push(arr2[i]);
    }
  }
  if (buffer.length === 0) return true;
  return false;
}

function closedPair(s1,s2) {
  return s2.split('').reverse().join('') === s1;
}

module.exports = matchWord;
