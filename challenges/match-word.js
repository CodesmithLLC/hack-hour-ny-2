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
  let newStr = str.toUpperCase();
  let rx = /[A-Z]/;
  let stack = [];
  let endword = false;

  for (let i = 0; i < newStr.length; i++) {
    if (stack.length > 0 && !rx.test(newStr[i])) endword = true;
    else if (rx.test(newStr[i])) {
      if (newStr[i] === stack[stack.length - 1] && endword) {
        stack.pop();
        if (!stack.length) endword = false;
      }
      else stack.push(newStr[i]);
    }
  }

  return !stack.length;
}

module.exports = matchWord;
