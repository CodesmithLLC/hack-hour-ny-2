// The head and tail properties are objects initially set to null. When we add data to the linked list, the head and tail will point to the objects (nodes) we insert. Head will point to a node at the start of the chain of nodes and tail will point to the node at the end.
// https://medium.com/@mrjimbot/linked-list-data-structure-javascript-3268e103597

let LinkedList = function() {
  this.head = null;
  this.tail = null;
};

// Make Nodes:
// Now that we know linked list is simply an object that contains two properties (head, tail) that contains other objects (nodes), what do the nodes look like? If we want nodes, we have to make them.

LinkedList.prototype.makeNode = function(value) {
  let node = {};
  node.value = value;
  node.next = null;
  return node;
};

// MAKING METHODS:

// If there is no value at head, then assign the newly created node to head and assign newNode to both tail.next and tail. When it is the first insertion, head gets assigned. Subsequent insertions only update tail and tail.next, not head.

// ADD TO TAIL
LinkedList.prototype.addToTail = function(value) {
  let newNode = makeNode(value);
  if (!this.head.value) {
    this.head = newNode;
  }
  this.tail.next = newNode;
  this.tail = newNode;
};

// REMOVE HEAD 
LinkedList.prototype.removeHead = function() {
  if (this.head === null) {
    return null;
  }
  let oldHead = this.head;
  this.head = this.head.next;
  this.tail = this.tail.next;
};

// CONTAINS -> The loop checks every node starting from the head until it finds a match or there are no more nodes left in the list.
LinkedList.prototype.contains = function(value) {
  let node = this.head;
  while(node){
    if (node.value === value){
      return true;
    }
    node = node.next;
  }
  return false;
}

