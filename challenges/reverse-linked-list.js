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

// function reverseLinkedList(head) {
// 	let currNode = head;
// 	while(currNode.next) {
// 		let newHead = currNode.next;
// 		if(currNode.value === head.value && currNode.next.value === head.next.value) currNode.next = null;
// 		newHead.next = currNode;
// 		currNode = newHead;
// 	}
// }

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
