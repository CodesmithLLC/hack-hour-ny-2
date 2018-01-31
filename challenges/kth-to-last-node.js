/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
  this.previous = null; 
}

function kthToLastNode(k, head) {
	function recursiveLoop(k,head){
    let storage = []; 
	  if(head.next === null){
	    storage.push(head.value)
	    return storage
	  } 
	  storage.push(head.value);
	  storage = storage.concat(recursiveLoop(k, head.next))
	  return storage
	}
	let arr = recursiveLoop(k, head)
	return arr[arr.length - k];
}


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
