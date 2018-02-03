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

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {

  // let s2Len = s2.length;
  // for (let i = 1; i < s2Len; i++) {
  //   let s2Sub = s2.slice(0, i);
  //   if(!isSubstring(s1, s2Sub)) {
  //     return s2Sub;
  //   }

  // }

  let i = 1;
  while (isSubstring(s1, s2.slice(0, i))) {
    i++
  }

  let s2Sub = s2.slice(0, i - 1);
  let s2Sub2 = s2.slice(i - 1);
  console.log(s2Sub)
  console.log(s2Sub2)
  // if (s2Sub.length > s2Sub2.length) {
  //   let newS2 = s2Sub2 + s2Sub;
  // return newS2
  // }
  return s2Sub2.concat(s2Sub) === s1
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
