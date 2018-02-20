/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  let current = head;
  let storage = [];
  while(current) {
    storage.push(current);
    current = current.next;
  }
  current = storage[storage.length - 1];
  let newHead = current;
  for (let i = storage.length - 2; i >= 0; i--) {
    current.next = storage[i];
    current = current.next;
  }
  current.next = null;
  list = newHead;
  return list;
}


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
