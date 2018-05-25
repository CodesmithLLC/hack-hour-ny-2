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

function zip(l1, l2){

  if (!l1) return l2
  if (!l2) return l1

  let curr1 = l1
  let curr2 = l2
  let curNext1 = l1.next
  let curNext2 = l2.next

  while (curNext1 && curNext2){

    curr1.next = curr2
    curr2.next = curNext1

    curr1 = curNext1
    curr2 = curNext2

    curNext1 = curNext1.next
    curNext2 = curNext2.next
  }
  
  if (!curr2.next) curr2.next =  curr1.next
  curr1.next = curr2
   
  return l1
}

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
