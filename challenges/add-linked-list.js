/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let arrOne = [];
  let arrTwo = [];
  let currentOne = l1;
  let currentTwo = l2;
  if (!l1) return l2;
  if (!l2) return l1;
  while(currentOne || currentTwo) {
    if (currentOne) {
      arrOne.push(currentOne);
      let nextOne = currentOne.next;
      if (nextOne) {
        arrOne.push(nextOne);
        currentOne = nextOne;
      }
    }
    if (currentTwo) {
      arrTwo.push(currentTwo);
      let nextTwo = currentTwo.next;
      if (nextTwo) {
        arrTwo.push(nextTwo);
        currentTwo = nextTwo;
      }
    }
  } 
  let numOne = parseInt(arrOne.reverse().join(''));
  let numTwo = parseInt(arrTwo.reverse().join(''));
  return numOne + numTwo;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
