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

 	let zipped;
 	let currNode;
 	let nextNode1;
 	let nextNode2;
 	let nextNode;
 	let nextList;


 	if(l1){
 		if (!l2) return l1;
 		currNode = zipped = new Node(l1.val);
 		nextNode1 = l1.next;
 		nextNode2 = l2;
 		nextNode = nextNode2;
 		nextList = 2;
 	}
 	else if (l2){
 		if (!l1) return l2;
 		currNode = zipped = new Node(l2.val);
 		nextNode1 = l1;
 		nextNode2 = l2.next;
 		nextNode = nextNode1;
 		nextList = 1;
 	}

 	console.log('zipped -->', zipped)
 	console.log('currNode -->', currNode)
 	console.log('nextNode1 -->', nextNode1)
 	console.log('nextNode2 -->', nextNode2)
 	console.log('nextNode -->', nextNode)
 	console.log('nextList -->', nextList)

 	let run = true;

 	while (run){
 		if (run===false) return zipped;
 		if (nextNode!==null && nextList===1) {
 			zipped.next = new Node(nextNode.val);
 			nextNode = nextNode2.next;
 			nextList=2;
 		}
 		else if (nextNode!==null && nextList===2) {
 			zipped.next = new Node(nextNode.val);
 			nextNode = nextNode1.next;
 			nextList=1;
 			console.log('inside of else 2, zipped -->', zipped)
 			console.log('inside of else 2, nextNode -->', nextNode)
 			console.log('inside of else 2, nextList -->', nextList)
 		}
 		else run=false;
 	}
 }

 const l1 = {
 	val: 'a',
 	next: {
 		val: 'b',
 		next: {
 			val: 'c',
 			next: null
 		}
 	}
 }

 const l2 = {
 	val: 'x',
 	next: {
 		val: 'y',
 		next: {
 			val: 'z',
 			next: null
 		}
 	}
}
console.log(zip(l1, l2))
// function Node(val) {
//   this.value = val;
//   this.next = null;
// }
//
// function zip(l1, l2) {
// };

module.exports = {Node: Node, zip: zip};
