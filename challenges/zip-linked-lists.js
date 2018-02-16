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
	if(!l1.head) return l2;
	if(!l2.head) return l1;
	let currNode = l1.head;
	let l1next = true;
	while(currNode.next) {
		let nextNode = l2.head;
		let templ1 = currNode.next
		let templ2 = nextNode.next
		currNode.next = nextNode;
		if(l1next){
			l2.head = templ1;
			l1next = !l1next
		} else {
			l2.head = templ2;
			l1next = !l1next
		}
	}
	if(l2.head) {
		l1.tail.next = l2.head
	}
};

module.exports = {Node: Node, zip: zip};
