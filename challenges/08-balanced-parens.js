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
  const str = input.split('');
  let n = str.length;
  const stack = [];
  for (let i=0; i<n; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(str[i]);
    }
    if (str[i] === ')') {
      if (stack[stack.length-1] === '(') {
        stack.pop();
      } else {
        return false;
      }
    }
    if (str[i] === ']') {
      if (stack[stack.length-1] === '[') {
        stack.pop();
      } else {
        return false;
      }
    }
    if (str[i] === '}') {
      if (stack[stack.length-1] === '{') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length === 0) return true;
  return false;
}








module.exports = balancedParens;
