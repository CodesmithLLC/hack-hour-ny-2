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
  let openings = ['(', '[', '{'];
  let closings = [')', ']', '}'];

  // step 3: make input into just a string of just parens (use regex? or use some list (of just parens) to make a new string )

  let counter = 0;
  for (let c of input) {
    if (openings.indexOf(c) >= 0) { counter += 1; }
    if (closings.indexOf(c) >= 0) { counter -= 1; }
  }
  let countTest = counter === 0;

  // return countTest;
  // now that we passed countTest at least..
  // check if any other type of closing tag comes before an earlier opening tag's closing tag

  for (let i = 0; i < openings.length; i++) {
    if (input[0] === openings[i]) {
      var firstParenType = openings[i];
      var first = i;
      // console.log(first);
    }
    if (input[1] === openings[i]) {
      var secondParenType = openings[i];
      var second = i;
    }
    // var third = input.indexOf()
  }

  console.log(input.indexOf(closings[first]))
  console.log(input.indexOf(closings[second]))

  // checking if an earlier parens closes before the later opening tag closes
  if (input.indexOf(closings[first]) < input.indexOf(closings[second])) {
    return false;
  }
  return countTest;
}

module.exports = balancedParens;
