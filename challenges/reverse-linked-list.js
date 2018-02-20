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
    this.prev = null;
    this.curr = head;
    while(curr != null) {
        this.tempNext = curr.next;
        curr.next = prev;
        prev = curr;   // prev is for the next iteration to use as 'curr.next', so update it
        curr = tempNext;
    }
    // in the end, 'prev' will point to the first one (head)
    return prev;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
