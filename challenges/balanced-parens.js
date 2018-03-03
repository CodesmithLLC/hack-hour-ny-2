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
   let opens = ['(', '[', '{'];
   let close = [')', ']', '}'];

   let stack = [];

  let balanced = true;

  i = 0

  while ( i < input.length && balanced ) {
    let s = input[i]; // s is current bracket/parenthesis symbol
    let last;

    if (opens.includes(s)) {
      stack.push(s)
    } else { // hit closing bracket
      last = stack.slice(-1).toString() // last open bracket in stack
      // current s must be closing for last in stack; if so then pop; if not return false
     // console.log(close.indexOf(s), opens.indexOf(last))
      if(close.indexOf(s) === opens.indexOf(last)){
        stack.pop();
        console.log(stack);
      } else {
        return false;
      }
    }

    i++;
  }

 return stack.length === 0; 

 }


balancedParens('[(]{)}');



module.exports = balancedParens;
