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

function balancedParens(input){
  let open = ['[', '{', '('];
  let closed = [']', '}', ')'];
  let symbols = {
    ']': '[',
    '}': '{',
    ')': '('
  };

  let arr = [];

  for (let i = 0; i < input.length; i++) {
    if (open.includes(input[i])) {
      arr.push(input[i]);
      continue;
    }
    if (closed.includes(input[i]) && symbols[input[i]] === arr[arr.length - 1]) {
      arr.pop();
      continue;
    }
    if (closed.includes(input[i]) && open[arr[arr.length-1]] !== input[i]) return false;
  }
  if (!arr.length) return true;
  return false;
}

module.exports = balancedParens;
