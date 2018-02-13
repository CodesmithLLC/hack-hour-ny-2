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
  // build a stack
  // add each word to the stack
  const stack = [];
  let stackCheck = false;
  str = str.toLowerCase();
  let i = 0;
  while (i < str.length) {
    console.log(i);
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      let k = i+1;
      let foundStr = str[i];
      while (str.charCodeAt(k) >= 97 && str.charCodeAt(k) <= 122) {
        foundStr += str[k];
        k++;
      }
      i = (k);
      if (stack[stack.length-1] === foundStr.split('').reverse().join('')) {
        stack.pop();
      } else {
        stack.push(foundStr);
        stackCheck = true;
      }
    } else {
    i++;
    }
  }
  return (stackCheck && stack.length === 0) ? true : false;
}

module.exports = matchWord;
