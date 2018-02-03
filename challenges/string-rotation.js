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
  let sub2 = s2
  for (var i = 1; i < s2.length; i += 1) { 
    sub2 = sub2.substring(sub2.length -1) + sub2.substring(0, sub2.length -1)
    if (sub2 === s1) {
      return true
    }
  }
  return false
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
