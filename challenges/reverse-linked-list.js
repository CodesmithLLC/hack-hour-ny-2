/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

 // use a counter to go through the list and then create a new linked list while
 // decrementing the counter

let arr = [];
function Node(value) {
  this.value = value;
  this.next = null;
}
const l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(3);

// const l2 = new Node(2);
// l2.next = new Node(4);
// l2.next.next = new Node(6);

function reverseLinkedList(head) {
  while(head.next !== null) {
    arr.push(head.next);
    head = head.next;
  }
  arr.reverse();
  return arr[0];
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
