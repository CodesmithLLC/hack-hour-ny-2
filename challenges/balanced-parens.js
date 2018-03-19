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

// console.log(balancedParens('('));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true
// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}')); // false
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));
// function balancedParens(input){
//     let stack = [];

//     function isOpening(input, i) {
//         let character = input.charAt(i);

//         if (character === "[") return true;
//         if (character === "{") return true;
//         if (character === "(") return true;
//         return false;
//     }

//     function isClosing(input, i) {
//         let character = input.charAt(i);

//         if (character === "]") return true;
//         if (character === "}") return true;
//         if (character === ")") return true;
//         return false;
//     }

//     for(let i = 0; i < input.length; i += 1) {
//         if(isOpening(input, i)) stack.push(input.charAt(i));
//         else if (isClosing(input,i)) {
//             let pop = stack.pop();
//             if(pop === "[") {
//                 if(input.charAt(i) !== "]") return false;
//             } else if (pop === "{") {
//                 if (input.charAt(i) !== "}") return false;
//             } else if (pop === "(") {
//                 if (input.charAt(i) !== ")") return false;
//             } 
//         }
//     }
//     if(stack.length > 0) return false;
//     return true;


//     // let i = 0,
//     //     brackets = false,
//     //     curly = false,
//     //     parens = false;
    
//     // while (i < input.length) {
//     //     if(input.charAt(i) === "[") {
//     //         brackets = true;
//     //         // i += 1
//     //     } else if (input.charAt(i) === "{") {
//     //         curly = true;
//     //         // i += 1
//     //     } else if (input.charAt(i) === "(") {
//     //         parens = true;
//     //         // i += 1
//     //     }

//     //     else if (brackets && input.charAt(i) === "]" ) {
//     //         if(curly || parens) return false;
//     //         brackets = false;
//     //     } else if (curly && input.charAt(i) === "}") {
//     //         if (brackets || parens) return false;
//     //         curly = false;
//     //     } else if (parens && input.charAt(i) === ")") {
//     //         if (brackets || curly) return false;
//     //         parens = false;
//     //     }

//     //     i += 1;
//     // }

//     // if(!brackets && !curly && !parens) return true;

//     // return false;
// }


function balancedParens(input) {
  const pairs = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  const stack = [];
  const iArr = input.split('');

  iArr.forEach((el, i) => {
    // if it it is an opening bracket
    if(pairs[el]) stack.push(el);
    // if it would close the last open bracket in the stack, pop
    else if (el === pairs[stack[stack.length - 1]]) stack.pop();
  });

  return stack.length === 0;
}

module.exports = balancedParens;
