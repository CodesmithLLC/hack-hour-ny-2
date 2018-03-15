/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
	
	let array = linkMaker(head)
	let i = array.length -1 
	let newArr = insertion(head);
	
	function insertion(head){
	  let input = head; 
	  if(input.next === null){
	    input.value = array[i];
	  } else if (input.next !== null){
	    input.value = array[i];
	    i--;
	    insertion(input.next);
	  }
	  return input; 
	}
	
	function linkMaker(head){
	let entireArray = []; 

	entireArray.push(head.value);

	if(head.next === null){
		return entireArray;
	}
	
	if(head.next !== null)
		entireArray = entireArray.concat(linkMaker(head.next));
		
	return entireArray;
	}
	
	return newArr
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
