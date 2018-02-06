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
   // create list of all parens
   // set boolean variable to false (make three different variables)
   if (input.length <= 1) {
     return false;
   }
   let foundParenz;
   let foundSquare;
   let foundBracket;
   for (let i = 0; i < input.length; i++) {
     if (input.charCodeAt(i) === 40) {
       foundParenz = false;
     } if (input.charCodeAt(i) === 41 && foundParenz === false) {
       foundParenz = true;
     } if (input.charCodeAt(i) === 91) {
       foundSquare = false;
     } if (input.charCodeAt(i) === 93 && foundSquare === false) {
       foundSquare = true;
     } if (input.charCodeAt(i) === 123) {
       foundBracket = false;
     } if (input.charCodeAt(i) === 125 && foundBracket === false) {
       foundBracket = true;
     }
   }
   if (foundBracket === undefined) {
     foundBracket = true;
   } if (foundSquare === undefined) {
     foundSquare = true;
   } if (foundParenz === undefined) {
     foundParenz = true;
   }
   return foundBracket && foundSquare && foundParenz;
 }

module.exports = balancedParens;
