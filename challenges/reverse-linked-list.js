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
    if (head.next === null) {
      return head.value
    }
    let newHead = new Node(head.next.value)
    newHead.next = reverseLinkedList(head.next.next)
    return head
  }
  
  // Iterative 
  function reverseLinkedList(head) {
    while (head.next !=== null) {
      newHead = new Node(head.next.value)
      newHead.next = head
      head.next = head.next.next
    }
    return newHead
  }

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
