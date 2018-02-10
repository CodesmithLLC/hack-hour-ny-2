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
   if (typeof input !== 'string') return false;
   if (input.length % 2 !== 0) return false;
   const checkArr = [];
   for (let i = 0; i < input.length; i++) {
     if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
       checkArr.push(input[i]);
     }
     if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
       const lastItem = checkArr.pop();
       switch (input[i]) {
         case ')':
           if (lastItem !== '(') return false;
           break;
         case ']':
           if (lastItem !== '[') return false;
           break;
         case '}':
           if (lastItem !== '{') return false;
           break;
       }
     }
   }
   return true;
 }
}

module.exports = balancedParens;
