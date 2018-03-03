function LinkedList(){
  this.head = null;
}

LinkedList.prototype.push = function(val){
 let node = {
   value: val,
   next: null
 }

 if(!this.head){
   this.head = node;
 } else {
   current = this.head;
   while(current.next){
     current = current.next;
   }
   current.next = node;
 }
}

let ll = new LinkedList();
ll.push(2)
ll.push(3)
ll.push(4)
ll.push(5)

console.log(ll.head) // 2
console.log(ll.head.next) // 3
console.log(ll.head.next.next) // 4
console.log(ll.head.next.next.next) // 5

console.log('Forward:')
console.log(ll)

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
  this.value = val;
  this.next = null;
}

// in place 
function reverseLL(head) {
  // only one node
	if (!head || !head.next) return head;
	
	let prev = null, curr = head, next;
	while (curr) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	
	head = prev; // prev is the last truthy node
	return head; 
}

/////////////////


console.log('Reversed: ')
reverseLL(ll.head)
