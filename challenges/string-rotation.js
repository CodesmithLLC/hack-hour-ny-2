/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

console.log(stringRotation("hello", "he"));
function isSubstring(s1, s2) {
  return s2.includes(s1);
}

function stringRotation(s1, s2) {
  return isSubstring(s1, s2 + s2);
}

function stringRotation2(s1, s2) {
//   let start = s2.indexOf(s1.slice(0, 1));
//   let result = true;
//   let s1Index = 0;
//   if (s1.length !== s2.length) return false;
  
//   for (let i = start; i < s2.length; i++) {
//     if (s1.charAt(s1Index) !== s2.charAt(i)) {
//       return false;
//     }
//     s1Index += 1;
//   }

//   for (let i = 0; i < start; i++) {
//     if (s1.charAt(s1Index) !== s2.charAt(i)) {
//       return false;
//     }
//     s1Index += 1;
//   }
//   return true;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
