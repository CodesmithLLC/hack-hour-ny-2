/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
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
  let carryOver = 0;
  let l3;
  if (l1.value + l2.value > 9) {
    l3 = new Node((l1.value + l2.value) % 10);
    carryOver = 1;
  } 
  else l3 = new Node(l1.value + l2.value);
  let current3 = l3;
  let current1 = l1.next;
  let current2 = l2.next;
  while(current1 || current2 || carryOver) {
    if (current2 && current2) {
      if (current1.value + current2.value > 9) {
        current3.next = new Node((current1.value + current2.value + carryOver) % 10);
        carryOver = 1;
      } 
      else if (current1.value + current2.value === 9 && carryOver) current3.next = new Node(0);
      else {
        current3.next = new Node(current1.value + current2.value + carryOver);
        carryOver = 0;
      } 
    }
    
    current1 = current1.next;
    current2 = current2.next;
    current3 = current3.next;
  }
  return l3;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
