/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
	// inputs: 2 linked lists
	// output: 1 linked list
	// merge the 2 inputs to create 1 linked list with alternating values from each input

	// // start of the new list is first node from L1
	// const head = new Node(l1.value);
	// // store the current node 
}

// L1
// start
const l1 = new Node('A');
// next
const B = new Node('B')
l1.next = B;
//l1.next.value = B;

// next next
const C = new Node('C');
l1.next.next = C;
//l1.next.next.value = C;

// L2
// start
const l2 = new Node('D');
// next
const E = new Node('E')
l2.next = E;
//l2.next.value = E;

// next next
// const C = new Node('F');
// l1.next.next = C;
// l1.next.next.value = C;

console.log(JSON.stringify(zip(l1, l2), null, 4)); 
// Node { value: A, next: Node { value: D, next: Node { value: B, next: Node { value: E, next: Node { value: C, next: null } }

module.exports = {Node: Node, zip: zip};
