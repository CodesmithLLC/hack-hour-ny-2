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

// method 1 -> build up from base case. 
function kthToLastNode(k, head) {
	function recursiveLoop(k,storage){
    let storage = []; 
	  if(head.next === null){
	    storage.push(head.value)
	    return storage
	  } 
	  storage.push(head.value);
	  storage = storage.concat(recursiveLoop(k, storage))
	  return storage
	}
	let arr = recursiveLoop(k, head)
	return arr[arr.length - k];
}

// method 2 -> build up to base case.
function kthToLastNode(k, head) {
	function recursiveLoop(storage,headInner){
	  if(headInner.next === null){
	    storage.push(headInner.value)
	    return storage
	  } 
	  storage.push(headInner.value);
	  return recursiveLoop(storage, headInner.next)
	}
	let arr = recursiveLoop([], head)
	return arr[arr.length - k];
}


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
