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
	let newObj = new Node(l1)
	let newObj2 = new Node (l2)
	newObj.next = newObj2; 



// testing to see what the test cases are. 
	return newObj; 


};

module.exports = {Node: Node, zip: zip};
