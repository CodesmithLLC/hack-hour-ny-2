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

const PAIRS = { '(': ')', '[': ']', '{': '}' }
function balancedParens(input) {
  if (input.length % 2 !== 0) return false;
  input = input.split('');
  let expected = '';
  let actual = '';
  const midPoint = Math.floor((input.length) / 2);
  for (let i = 0; i < midPoint; i += 1) {
    const eleFront = input.shift();
    const eleBack = input.pop();
    expected += PAIRS[eleFront];
    actual += eleBack;
  }
  if (actual === expected) return true;
  return false;
}

module.exports = balancedParens;
