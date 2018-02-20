// create LL for testing

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

function reverseLinkedList(head) {
 if(!head && !head.next) return head;

 const nodes = [];
 let current = head;

 // store all nodes in an Array
 while(current){
   nodes.push(current);
   current = current.next;
 }

 let reversedLL = new LinkedList();

 reversedLL.head = nodes.pop();
 current = reversedLL.head;

 let node = nodes.pop();

 //make sure to make next of the newly inserted node to be null
  //other wise the last node of your SLL will retain its old next.
  while(node){
    node.next = null;
    current.next = node;

    current = current.next;
    node = nodes.pop();
  }
  return reversedLL;
}

console.log('Reversed: ')
reverseLinkedList(ll.head)
