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

let A = new Node(1);
		A.next = new Node(3);
		A.next.next = new Node(5);
		A.next.next.next = new Node(7);
let B = new Node(2);
		B.next = new Node(4);
		B.next.next = new Node(6);
		B.next.next.next = new Node(8);

function zip(l1, l2) {

	if (!l1 && !l2) return false;
	if (!l1 && l2) return l2;
	if (l1 && !l2) return l1;
	let first = l1;
	let second = l2;
	let firstNext;
	let secondNext;
	while (first !== null && second !== null){
		
		firstNext = first.next;
		secondNext = second.next;

		second.next = firstNext;
		first.next = second;

		first = firstNext;
		second = secondNext;
	}	
	l2 = second;
};


const showList = (head) => {
	let current = head;
	console.log(current.value)
	while (current.next !== null){
		current = current.next;
		console.log(current.value)
	}
}

zip(A,B);

showList(A);
module.exports = {Node: Node, zip: zip};
