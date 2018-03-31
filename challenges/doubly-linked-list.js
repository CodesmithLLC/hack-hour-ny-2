/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
  }
  else {
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  if (this.head.val === val) {
    if (this.head.next) this.head = this.head.next;
    else this.head = null;
  }
  if (!this.head.next) this.head = null;
  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
      current.next.next.prev = current;
    }
    current = current.next;
  }
  if (this.tail.val === val) {
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
  } 
};

module.exports = LinkedList;
