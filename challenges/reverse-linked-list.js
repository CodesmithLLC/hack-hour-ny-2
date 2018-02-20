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
    if(!head) return null;
    if(!head.next) return head;
    let previous = head;
    let current = previous.next;
    previous.next = null;

    while(current.next !== null) {
        let nextVal = current.next;
        current.next = previous;
        previous = current;
        current = nextVal;
    }

    current.next = previous;

    return current;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
