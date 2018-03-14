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
  const num1 = listToNum(l1);
  const num2 = listToNum(l2);
  return numToList(num1+num2);
}

function listToNum(l) {
  let s = '';
  while (l) {
    s = l.value.toString() + s;
    l = l.next;
  }
  return Number(s);
}

function numToList(num) {
  const str = num.toString();
  const head = new Node(Number(str[str.length-1]));
  let currNode = head;
  for (let i=str.length-2; i>=0; i--) {
    currNode.next = new Node(Number(str[i]));
    currNode = currNode.next;
  }
  return head;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
