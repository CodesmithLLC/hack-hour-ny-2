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
  // returns true if second string is found in the first string
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  // takes two strings
  // string 2 has to be the same length as string one in order to check, if not return false
  if (s1.length === s2.length) {
    // split second string in half
    // makes one call to isSubstring to check if half of string 2 is contained within string 1
    let half = Math.round(s1.length / 2);
    let s2substring = s2.substring(0, half);
    return isSubstring(s1, s2substring);
  }

  return false;
}


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
