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
  // begin with string1, then concat all permutations
  let len = s1.length;

  let allPermutations = '';

  let currentPerm = '';

  for(var i=0; i<s1.length; i++) {
    let last = s1[s1.length-1];
    let front = s1.slice(0,-1);
    currentPerm = last+front;
    console.log(currentPerm);
    s1 = currentPerm;
    allPermutations += currentPerm;
  }

  console.log(allPermutations)

  return isSubstring(allPermutations, s2) && (len == s2.length )

}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
