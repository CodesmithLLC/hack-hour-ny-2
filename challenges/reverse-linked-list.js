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
	// input: head of LL 
	// output: new head of LL

	if (!head || !head.next) return head;

	// keep reference to next, prev and current
	let prev = null, next = null, current = head;

	while (current) {
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}

	head = prev;
	
	return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

console.log(reverseLinkedList(nodeA)); // -> return nodeD, new linked list is nodeD, nodeC, nodeB, nodeA