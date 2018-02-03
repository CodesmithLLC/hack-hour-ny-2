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
  // s2 has to be the same length, has to be in the proper order
  // find the location of h and splice from there,
  // add on the rest of the word
  // if word equals s1 then they are the same
  let s2Arr = s2.split('');
  let firstIndex = s2.indexOf(s1.charAt(0));
  let firstArr = s2Arr.splice(firstIndex);
  return (firstArr.concat(s2Arr).join('') === s1? true: false);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
