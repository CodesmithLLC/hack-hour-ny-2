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

let A = new Node(1);
		A.next = new Node(3);
		A.next.next = new Node(5);
		A.next.next.next = new Node(7);
let B = new Node(2);
		B.next = new Node(4);
		B.next.next = new Node(6);
		B.next.next.next = new Node(8);

function addLinkedList(l1, l2) {

	let carried = 0;
	let currentNum;
	let current1 = l1;
	let current2 = l2;
	let returnList = new Node(0);
	let newList = returnList;

	while (current2.next !== null && current1 !== null){
		
		let currentNum = current1.value + current2.value + carried;
		if (currentNum > 9){
			carried = Number(''+currentNum[0]);
			currentNum = Number(''+currentNum[1]);
		}

		newList.value = currentNum;

		current1 = current1.next;
		current2 = current2.next;
		if (current1 !== null && current2 !== null){
			newList.next = new Node(0);
			newList = newList.next;
		}
	}

	return returnList
}

const showList = (head) => {
	let current = head;
	console.log(current.value)
	while (current.next !== null){
		current = current.next;
		console.log(current.value)
	}
}

showList(addLinkedList(A,B))

module.exports = {Node: Node, addLinkedList: addLinkedList};
