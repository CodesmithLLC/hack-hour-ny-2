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
	if(!l1.value && !l1.next) return l2;
	if(!l2.value && !l2.next) return l1;
	let currNode = l1.value;
	let nextNode = l2.value;
	let l1next = true;
	while(currNode.next) {
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
	// if(l2.value && l2.next) {
	// 	l1.tail.next = l2.head
	// }
	return l1
};

module.exports = {Node: Node, zip: zip};
