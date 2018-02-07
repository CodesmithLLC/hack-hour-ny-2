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
 let opens = ['(', '[', '{']; // make +1
 let close = [')', ']', '}']; // make -1

 let left = 0;
 let right = 0;
 let opened = true;

 if (close.includes(input[0])) return false;

 for (var i of input){

   if(opens.includes(i)) {
     left++;
   }
   if(close.includes(i)) {
     right++;
   }

   console.log(i, left, right)

 }

 return left == right
}

balancedParens('[(]{)}');



module.exports = balancedParens;
