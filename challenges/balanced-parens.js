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

for (let i = 0; i < input.length; i += 1){
  let i2 = input.length - 1;
  if (openBraces.indexOf(input[i]) > 0){
    let ob = openBraces.indexOf(input[i]);
    for (i2; i2 > i; i -= 1){
      if (closeBraces.indexOf(input[i2])){
        if (closeBraces.indexOf(input[i2]) === ob) { break}
        else {return false}
      }
    }
  }
}
return true
}

module.exports = balancedParens;
