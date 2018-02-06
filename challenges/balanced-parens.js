/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
  const openSign = ['(', '{', '['];
  const closeSign = [')', '}', ']'];
  let parens = 0;
  let curly = 0;
  let brakets = 0;
  let opens = [];
  for (let i = 0; i < input.length; i += 1) {
    switch (input[i]) {
      case '(':
        parens += 1;
        opens.push(0);
        break;
      case '{':
        curly += 1;
        opens.push(1);
        break;
      case '[':
        brakets +=1;
        opens.push(2);
        break;
      case ')':
      if (opens[opens.length -1] !== 0) {return false}
        parens -= 1;
        opens.pop();
        break; 
      case '}':
      if (opens[opens.length -1] !== 1) {return false}
        curly -= 1; 
        opens.pop(); 
        break;
      case ']':
      if (opens[opens.length -1] !== 2) {return false}
        brakets -= 1;
        opens.pop();      
        break; 
    }
    if (parens < 0 || curly < 0 || brakets < 0) {
      return false;
    }
  }
  if (parens > 0 || curly > 0 || brakets > 0) {
    return false;
  }
  return true;
}

module.exports = balancedParens;
